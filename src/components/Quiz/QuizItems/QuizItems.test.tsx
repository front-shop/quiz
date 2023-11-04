import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Assuming you are using Redux
import QuizItems from './QuizItems';
import { useAppSelector } from '../../../hooks/hooks';
import { store } from '../../../store/store';
import { IQuizItem } from '../../../store/services/quiz/constant';

// Mock the necessary dependencies
jest.mock('../../../hooks/hooks', () => ({
  useAppSelector: jest.fn(),
  useAppDispatch: jest.fn()
}));
jest.mock('../../../store/services/quizes', () => ({
  quizesThunks: {
    fetchQuizes: jest.fn()
  }
}));
jest.mock('../QuizItem/QuizItem', () => function MockInfo({ item }: { item: IQuizItem }) {
  return <div>{item.title}</div>;
});

describe('QuizItems component', () => {
  const renderQuizItems = (): void => {
    render(
      <Provider store={store}>
        <QuizItems />
      </Provider>
    );
  };
  it('renders loading state correctly', async () => {
    // Mock the useSelector hook to return loading state
    (useAppSelector as jest.Mock).mockReturnValue({
      quizes: [],
      status: 'loading',
      error: null
    });

    renderQuizItems();

    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toBeInTheDocument();
  });

  it('renders error state correctly', () => {
    (useAppSelector as jest.Mock).mockReturnValue({
      quizes: [],
      status: 'failed',
      error: 'Network Error'
    });

    render(<QuizItems />);

    expect(screen.getByText('Network Error')).toBeInTheDocument();
  });

  it('renders quizzes correctly', async () => {
    const mockQuizes = [
      { id: 1, title: 'Quiz 1', description: 'description 1' },
      { id: 2, title: 'Quiz 2', description: 'description 2' }
    ];
    (useAppSelector as jest.Mock).mockReturnValue({
      quizes: mockQuizes,
      status: 'success',
      error: null
    });

    renderQuizItems();

    // const quiz1 = await screen.findByText('Quiz 1');
    // expect(quiz1).toBeInTheDocument();
    mockQuizes.forEach((quiz) => {
      expect(screen.getByText(quiz.title)).toBeInTheDocument();
    });
  });
});
