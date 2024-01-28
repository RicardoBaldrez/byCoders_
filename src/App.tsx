import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

import AddForecast from './components/AddForecast';
import Forecasts from './components/Forecasts';

import './App.css';
import { iconAccordingMmoCode } from './utils/iconAccordingMmoCode.js';

function App() {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLatitudeChange = (value: string) => setLatitude(value);
  const handleLongitudeChange = (value: string) => setLongitude(value);
  const handleErrorChange = (value: string) => setError(value);

  return (
    <>
      <p>SP: Latitude: -23.5489, Longitude: -46.6388</p>
      <span>-25,4278, </span>
      <span>-49,2731</span>
      <br />
      <br />

      <h1>According Code: </h1>
      <span style={{ fontWeight: 'bold' }}>{iconAccordingMmoCode(82)}</span>

      <h1>Initial Page</h1>
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
              <AddForecast
                errorApi={error}
                latitude={latitude}
                longitude={longitude}
                onErrorChange={handleErrorChange}
                onLatitudeChange={handleLatitudeChange}
                onLongitudeChange={handleLongitudeChange}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
