import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ThemeToggler from './ThemeToggler';
import ColorModeContext from '../../config/color-context';

describe('ThemeToggler component', () => {
  const renderThemeToggler = () => render(
    <ThemeProvider theme={createTheme()}>
      <ColorModeContext.Provider value={{ toggleColorMode: jest.fn() }}>
        <ThemeToggler />
      </ColorModeContext.Provider>
    </ThemeProvider>
  );
  it('renders with light mode icon initially', () => {
    renderThemeToggler();

    const iconButton = screen.getByRole('button');
    expect(iconButton).toBeInTheDocument();

    const iconButtonLight = screen.getByTestId('Brightness4Icon');
    expect(iconButtonLight).toBeInTheDocument();
  });

  it('toggles between light and dark mode icons on click', () => {
    const toggleColorMode = jest.fn();
    render(
      <ThemeProvider theme={createTheme()}>
        <ColorModeContext.Provider value={{ toggleColorMode }}>
          <ThemeToggler />
        </ColorModeContext.Provider>
      </ThemeProvider>
    );

    const iconButton = screen.getByRole('button');
    fireEvent.click(iconButton);
    expect(toggleColorMode).toHaveBeenCalledTimes(1);

    const iconButtonDark = screen.getByTestId('Brightness4Icon');
    expect(iconButtonDark).toBeInTheDocument();
  });
});
