import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './styles';

export default function Header(): ReactElement {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/add-forecast"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Add-forecast
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/forecasts"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Forecasts
            </NavLink>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
}
