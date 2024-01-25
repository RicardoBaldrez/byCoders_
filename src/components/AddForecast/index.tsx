import { ReactElement } from 'react';

export default function AddForecast(): ReactElement {
  return (
    <>
      <h1>AddForecast Page</h1>
      <label>
        Latitude:
        <input type="text" name="latitude" placeholder="Latitude" />
      </label>
      <br />
      <label>
        Longitude:
        <input type="text" name="longitude" placeholder="Longitude" />
      </label>
    </>
  );
}
