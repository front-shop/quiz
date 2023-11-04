import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';
import { AboutInfo } from './constants';

describe('About Component', () => {
  it('renders About page correctly', () => {
    render(<About />);

    const mainHeading = screen.getByRole('heading', { level: 2, name: /About Us/i });
    expect(mainHeading).toBeInTheDocument();
    expect(screen.getByText('QUIZ')).toBeInTheDocument();
    expect(screen.getByText(/Welcome to/i)).toBeInTheDocument();
    const mainHeadingBottom = screen.getByRole('heading', { level: 3, name: /Happy quizzing!/i });
    expect(mainHeadingBottom).toBeInTheDocument();
  });

  it('renders all about info correctly', () => {
    render(<About />);
    AboutInfo.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });
});
