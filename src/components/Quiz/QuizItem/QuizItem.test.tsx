import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import QuizItem from './QuizItem';
import routes from '../../../constants/routes';

const mockItem = {
  id: '1',
  title: 'Test Quiz',
  description: 'Test Quiz description',
  img: 'testImageUrl'
};

describe('QuizItem component', () => {
  const renderQuizItem = ():void => {
    render(
      <Router>
        <QuizItem item={mockItem}/>
      </Router>
    );
  };
  it('renders component with correct content', () => {
    renderQuizItem();

    expect(screen.getByText(mockItem.title)).toBeInTheDocument();
    expect(screen.getByText(mockItem.description)).toBeInTheDocument();
  });

  it('renders component with the correct image', () => {
    renderQuizItem();

    const imageElement = screen.getByAltText(mockItem.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', mockItem.img);
  });

  it('renders component with correct start quiz link', () => {
    renderQuizItem();

    const startQuizLink = screen.getByText(`Start ${mockItem.title} quiz`);
    expect(startQuizLink).toBeInTheDocument();
    expect(startQuizLink).toHaveAttribute('href', `/${routes.quiz.key}/${mockItem.title}`);
  });
});
