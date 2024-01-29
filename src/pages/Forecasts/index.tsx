import React, { ReactElement, useState } from 'react';

import moment from 'moment';

import { iconAccordingMmoCode } from '../../utils/iconAccordingMmoCode.js';
import {
  SectionCurrent,
  WrapperCardContent,
  HeaderCard,
  ContentDetails,
  SectionDaily,
  ListLastSevenDays,
  WrapperMaxMinTemp,
} from './styles';

export default function Forecasts(): ReactElement {
  const [detailsLocal, setDetailsLocal] = useState<any>(() => {
    let infos;
    try {
      const infoslocal = localStorage.getItem('location_weather');
      infos = infoslocal !== null ? JSON.parse(infoslocal) : [];
    } catch (error) {
      infos = [];
    }

    return infos;
  });

  const days = detailsLocal.daily.time;
  const codes = detailsLocal.daily.weather_code;
  const temp_max = detailsLocal.daily.temperature_2m_max;
  const temp_min = detailsLocal.daily.temperature_2m_min;

  const joinToDetails = days.map((e: string, i: number) => {
    return {
      data: e,
      weather_code: codes[i],
      temp_max: temp_max[i],
      temp_min: temp_min[i],
    };
  });

  return (
    <>
      <SectionCurrent>
        <WrapperCardContent>
          <HeaderCard>
            <h1>
              Tempo agora para {detailsLocal.latitude}/{detailsLocal.longitude}
            </h1>
          </HeaderCard>
          <div>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {iconAccordingMmoCode(detailsLocal.current.weather_code).icon}{' '}
              <span
                style={{
                  fontWeight: 'bold',
                  fontSize: '2rem',
                  marginLeft: '15px',
                }}
              >
                {parseInt(detailsLocal.current.temperature_2m, 10)}º
              </span>
            </p>
            <ContentDetails>
              <p>
                {iconAccordingMmoCode(detailsLocal.current.weather_code).reason}
              </p>
              <p>
                Sensação{' '}
                <span>
                  {parseInt(detailsLocal.current.apparent_temperature, 10)}º
                </span>
              </p>
              <p>
                Pressão{' '}
                <span>
                  {parseInt(detailsLocal.current.surface_pressure, 10)}
                  {detailsLocal.current_units.surface_pressure}
                </span>
              </p>
              <p>
                Umidade relativa{' '}
                <span>
                  {parseInt(detailsLocal.current.relative_humidity_2m, 10)}
                  {detailsLocal.current_units.relative_humidity_2m}
                </span>
              </p>
            </ContentDetails>
          </div>
        </WrapperCardContent>
      </SectionCurrent>
      <SectionDaily>
        <ListLastSevenDays>
          <h1>Próximos 7 dias</h1>
          {joinToDetails.map((detail: any, index: number) => {
            console.log(detail.weather_code);

            return (
              <li key={index}>
                {moment(detail.data).format('DD')}
                {iconAccordingMmoCode(detail.weather_code).icon}
                <WrapperMaxMinTemp>
                  <p>
                    max <span>{parseInt(detail.temp_max, 10)}º</span>
                  </p>
                  <p>
                    min <span>{parseInt(detail.temp_min, 10)}º</span>
                  </p>
                </WrapperMaxMinTemp>
              </li>
            );
          })}
        </ListLastSevenDays>
      </SectionDaily>
    </>
  );
}
