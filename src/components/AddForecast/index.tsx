import React, { ReactElement } from 'react';

interface PropsAddForecast {
  onLatitudeChange: (value: string) => void;
  onLongitudeChange: (value: string) => void;
}

export default function AddForecast({
  onLatitudeChange,
  onLongitudeChange,
}: PropsAddForecast): ReactElement {
  return (
    <>
      <h1>AddForecast Page</h1>
      <label>
        Latitude:
        <input
          type="number"
          name="latitude"
          placeholder="Latitude"
          onChange={event => onLatitudeChange(event.target.value)}
        />
      </label>
      <br />
      <label>
        Longitude:
        <input
          type="number"
          name="longitude"
          placeholder="Longitude"
          onChange={event => onLongitudeChange(event.target.value)}
        />
      </label>
    </>
  );
}
