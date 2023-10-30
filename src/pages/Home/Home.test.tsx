import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from './Home';
import { store } from '../../store/store';

jest.mock('../../components/Quiz/QuizItems/QuizItems', () => function MockInfo() {
  return <div>Test QuizItems component</div>;
});
jest.mock('../../components/Quiz/QuizItem/QuizItem', () => function MockInfo() {
  return <div>Test QuizItem component</div>;
});

describe('Home Component', () => {
  const renderHomePage = () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  };

  it('renders the Search component', () => {
    renderHomePage();
    expect(screen.getByRole('heading', { level: 5, name: 'Search bar' })).toBeInTheDocument();
  });

  it('renders the Quizzes heading and QuizItems', async () => {
    renderHomePage();

    expect(screen.getByRole('heading', { level: 3, name: 'Quizzes' })).toBeInTheDocument();
    const quizItems = await screen.findByText('Test QuizItems component');
    expect(quizItems).toBeInTheDocument();
  });
});
