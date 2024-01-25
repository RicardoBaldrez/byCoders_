import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';

import AddForecast from './components/AddForecast';
import Forecasts from './components/Forecasts';

import './App.css';

function App() {
  const [latitude, setLatitude] = useState<string>("");
  const [longitude, setLongitude] = useState<string>("");

  return (
    <>
      <h1>Initial Page</h1>

      <BrowserRouter>
        <Link to="/">Come back</Link>
        <div>
          <NavLink to="/forecasts" className={({ isActive }) => isActive ? "active" : ""}>Forecasts</NavLink>{" "}/{" "}
          <NavLink to="/add-forecast" className={({ isActive }) => isActive ? "active" : ""}>add-forecast</NavLink>
        </div>

        <Routes>
          <Route path='/' element={<h1>Page Initial</h1>} />
          <Route path="/forecasts" element={<Forecasts />} />
          <Route path='/add-forecast' element={<AddForecast />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
