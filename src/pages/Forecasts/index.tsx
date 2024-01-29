import React, { ReactElement, useState } from 'react';

import { iconAccordingMmoCode } from '../../utils/iconAccordingMmoCode.js';
import {
  Section,
  WrapperCardContent,
  HeaderCard,
  ContentDetails,
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

  console.log({ detailsLocal });

  return (
    <Section>
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
    </Section>
  );
}
