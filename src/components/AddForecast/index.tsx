import React, { ReactElement } from 'react';

import useFetch from '../../hooks/useFetch';
import Loader from '../Loader';

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
  const { get, loading } = useFetch('https://api.open-meteo.com/v1');

  const handleFetchButtonClick = (e: any) => {
    e.preventDefault();

    onErrorChange('');

    get(
      `/forecast?latitude=${latitude}&longitude=${longitude}&timezone=America%2FSao_Paulo&current=temperature_2m,is_day`,
    )
      .then(data =>
        localStorage.setItem('location_weather', JSON.stringify(data)),
      )
      .catch(error => {
        if (error.error) {
          onErrorChange(error.reason);
        }
      });
  };

  return (
    <>
      {loading && <Loader />}
      <h1>AddForecast Page</h1>
      <form onSubmit={handleFetchButtonClick}>
        <label>
          Latitude:
          <input
            min="-180"
            max="180"
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
            min="-180"
            max="180"
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
      </form>
      {errorApi && (
        <p style={{ fontWeight: 'bold', color: 'red' }}>{errorApi}</p>
      )}
    </>
  );
}
