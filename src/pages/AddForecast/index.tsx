import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

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

    get(
      `/forecast?latitude=${latitude}&longitude=${longitude}&timezone=America%2FSao_Paulo&current=weather_code,temperature_2m,is_day`,
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
        <h1>AddForecast Page</h1>

        <Form onSubmit={handleFetchButtonClick}>
          <label>
            Latitude:
            <input
              // min="-90"
              // max="90"
              type="number"
              name="latitude"
              step="0.000001"
              placeholder="Latitude"
              onChange={event => onLatitudeChange(event.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Longitude:
            <input
              // min="-90"
              // max="90"
              type="number"
              name="longitude"
              step="0.000001"
              placeholder="Longitude"
              onChange={event => onLongitudeChange(event.target.value)}
              required
            />
          </label>
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
