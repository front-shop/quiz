import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar component', () => {
  const renderNavbar = ():void => {
    render(
      <Router>
        <Navbar />
      </Router>
    );
  };

  it('renders Navbar component', async () => {
    renderNavbar();

    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toBeInTheDocument();

    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).toBeInTheDocument();
  });

  it('check if the active class is applied correctly', async () => {
    renderNavbar();

    const linkHome = screen.getByRole('link', { name: /Home/i });
    expect(linkHome).toHaveClass('active');

    const linkAbout = screen.getByRole('link', { name: /About/i });
    expect(linkAbout).not.toHaveClass('active');

    fireEvent.click(linkAbout);
    expect(linkAbout).toHaveClass('active');
    expect(linkAbout).toHaveStyle('background: rgba(186, 104, 200, 0.4);');
  });
});
