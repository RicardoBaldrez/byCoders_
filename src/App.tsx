import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

import AddForecast from './components/AddForecast';
import Forecasts from './components/Forecasts';
import Loader from './components/Loader';
import useFetch from './hooks/useFetch';

import './App.css';

function App() {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [errorApi, setErrorApi] = useState<string>('');

  const { get, loading } = useFetch('https://api.open-meteo.com/v1');

  const handleLatitudeChange = (value: string) => setLatitude(value);
  const handleLongitudeChange = (value: string) => setLongitude(value);

  const handleFetchButtonClick = () => {
    get(
      `/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day`,
    )
      .then(data =>
        localStorage.setItem('location_weather', JSON.stringify(data)),
      )
      .catch(error => {
        if (error.error) {
          setErrorApi(error.reason);
        }
      });
  };

  return (
    <>
      <span>-25,4278</span>
      <br />
      <span>-49,2731</span>
      <h2>Error examplo</h2>
      <span>233301</span>
      <br />
      <span>463802</span>

      <h1>Initial Page</h1>
      {loading && <Loader />}
      <BrowserRouter>
        <Link to="/">Come back</Link>
        <div>
          <NavLink
            to="/forecasts"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Forecasts
          </NavLink>
          <NavLink
            to="/add-forecast"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            add-forecast
          </NavLink>
        </div>

        <Routes>
          <Route path="/" element={<h1>Page Initial</h1>} />
          <Route path="/forecasts" element={<Forecasts />} />
          <Route
            path="/add-forecast"
            element={
              <>
                <AddForecast
                  onLatitudeChange={handleLatitudeChange}
                  onLongitudeChange={handleLongitudeChange}
                />
                <button onClick={handleFetchButtonClick} type="button">
                  fetch weather
                </button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
