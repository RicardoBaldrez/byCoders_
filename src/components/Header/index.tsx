import React, { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuWrapper } from './styles';

export default function Menu(): ReactElement {
  return (
    <MenuWrapper>
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
    </MenuWrapper>
  );
}
