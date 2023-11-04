import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

describe('Header component', () => {
  const renderHeader = ():void => {
    render(
    <Router>
      <Header />
    </Router>
    );
  };
  it('renders logo', () => {
    renderHeader();

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('navbar opens on burgerMenuIcon click', () => {
    renderHeader();

    const burgerMenuIcon = screen.getByLabelText('open mobile menu');
    expect(burgerMenuIcon).toBeInTheDocument();

    fireEvent.click(burgerMenuIcon);
    const drawerContent = screen.getByRole('heading', { level: 6, name: /QUIZ/ });
    expect(drawerContent).toBeInTheDocument();
  });
});
