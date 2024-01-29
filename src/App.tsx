import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { RecoilRoot } from 'recoil';

import Header from './components/Header';
import AddForecast from './pages/AddForecast';
import Forecasts from './pages/Forecasts';
import './App.css';

function App() {
  const [latitude, setLatitude] = useState<string>('');
  const [longitude, setLongitude] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleLatitudeChange = (value: string) => setLatitude(value);
  const handleLongitudeChange = (value: string) => setLongitude(value);
  const handleErrorChange = (value: string) => setError(value);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <BrowserRouter>
        <Header />
        <RecoilRoot>
          <Routes>
            <Route path="/" element={<Navigate replace to="/add-forecast" />} />
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
        </RecoilRoot>
      </BrowserRouter>
    </div>
  );
}

export default App;
