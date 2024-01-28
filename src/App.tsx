import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import AddForecast from './pages/AddForecast';
import Forecasts from './pages/Forecasts';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLatitudeChange = (value: string) => setLatitude(value);
  const handleLongitudeChange = (value: string) => setLongitude(value);
  const handleErrorChange = (value: string) => setError(value);

  return (
    <div
      style={{ display: 'flex', border: '5px solid green', height: '100vh' }}
    >
      {/* <p>SP: Latitude: -23.5489, Longitude: -46.6388</p> */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
    </div>
  );
}

export default App;
