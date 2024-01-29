import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Loader from '../../components/Loader';
import useFetch from '../../hooks/useFetch';
import { Wrapper, Form, Content } from './styles';

interface PropsAddForecast {
  latitude: string;
  longitude: string;
  errorApi: string;
  onLatitudeChange: (value: string) => void;
  onLongitudeChange: (value: string) => void;
  onErrorChange: (value: string) => void;
}

export default function AddForecast({
  errorApi,
  latitude,
  longitude,
  onErrorChange,
  onLatitudeChange,
  onLongitudeChange,
}: PropsAddForecast): ReactElement {
  const navigate = useNavigate();

  const { get, loading } = useFetch('https://api.open-meteo.com/v1');

  const handleFetchButtonClick = (e: any) => {
    e.preventDefault();

    onErrorChange('');

    const paramsCurrent = `&current=is_day,temperature_2m,relative_humidity_2m,apparent_temperature,cloud_cover,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m`;
    const paramsDaily = `&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum`;

    get(
      `/forecast?&timezone=America%2FSao_Paulo&latitude=${latitude}&longitude=${longitude}&${paramsCurrent}&${paramsDaily}`,
    )
      .then(data => {
        localStorage.setItem('location_weather', JSON.stringify(data));
        navigate('/forecasts');
      })
      .catch(error => {
        if (error.error) {
          onErrorChange(error.reason);
        }
      });
  };

  return (
    <Wrapper>
      <Content>
        <h1>Veja o tempo para região escolhida</h1>

        <Form onSubmit={handleFetchButtonClick}>
          <Input
            // min="-90"
            // max="90"
            type="number"
            name="latitude"
            step="0.000001"
            placeholder="Latitude"
            onChange={(event: any) => onLatitudeChange(event.target.value)}
            required
          />
          <Input
            // min="-90"
            // max="90"
            type="number"
            name="longitude"
            step="0.000001"
            placeholder="Longitude"
            onChange={(event: any) => onLongitudeChange(event.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            fetch weather
          </button>
          {errorApi && (
            <p style={{ fontWeight: 'bold', color: 'red' }}>{errorApi}</p>
          )}
        </Form>
      </Content>
      {loading && <Loader />}
    </Wrapper>
  );
}
