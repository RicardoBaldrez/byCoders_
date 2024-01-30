import React, { ReactElement } from 'react';

import moment from 'moment';
import { useRecoilValue } from 'recoil';

import { detailsLocalAtom } from '../../components/state/atom';
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

interface Detail {
  data: string;
  temp_max: string;
  temp_min: string;
  weather_code: string;
}

export default function Forecasts(): ReactElement {
  // const [detailsLocal, setDetailsLocal] = useState<any>(() => {
  //   let infos;
  //   try {
  //     const infoslocal = localStorage.getItem('location_weather');
  //     infos = infoslocal !== null ? JSON.parse(infoslocal) : [];
  //   } catch (error) {
  //     infos = [];
  //   }

  //   return infos;
  // });
  const detailsLocal = useRecoilValue(detailsLocalAtom);

  const days = detailsLocal.daily.time;
  const codes = detailsLocal.daily.weather_code;
  const temp_max = detailsLocal.daily.temperature_2m_max;
  const temp_min = detailsLocal.daily.temperature_2m_min;

  const joinToDetails = days.map((day: string, i: number) => {
    return {
      date: day,
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
          {joinToDetails.map((detail: Detail, index: number) => {
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
