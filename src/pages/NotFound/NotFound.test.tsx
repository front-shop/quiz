import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
  const renderNotFound = ():void => {
    render(
      <Router>
        <NotFound />
      </Router>
    );
  };

  it('should render the correct elements', () => {
    renderNotFound();

    expect(screen.getByRole('heading', { level: 2, name: 'Oops!' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 1, name: '404' })).toBeInTheDocument();
    expect(screen.getByText('The page you’re looking for doesn’t exist.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Back Home/i })).toBeInTheDocument();
  });

  it('should have a Back Home button that redirects to "/"', async () => {
    renderNotFound();

    const backHomeButton = screen.getByRole('link', { name: /Back Home/i });
    expect(backHomeButton).toHaveAttribute('href', '/');
  });
});
