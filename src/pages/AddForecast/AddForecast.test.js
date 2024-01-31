import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import AddForecast from '../AddForecast';

describe('AddForecast Component', () => {
  describe('AddForecast Button', () => {
    it('should render a button element', () => {
      render(
        <BrowserRouter>
          <AddForecast />
        </BrowserRouter>,
      );
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toBeInTheDocument;
    });

    it('must confirm the text of the button', () => {
      render(
        <BrowserRouter>
          <AddForecast />
        </BrowserRouter>,
      );
      expect(screen.getByRole('button').textContent).toBe('Buscar');
    });

    it('should be disabled when clicked', () => {
      render(
        <BrowserRouter>
          <AddForecast />
        </BrowserRouter>,
      );
      fireEvent.click(screen.getByRole('button'));
      expect(screen.getByRole('button')).toBeDisabled();
    });
  });
});
