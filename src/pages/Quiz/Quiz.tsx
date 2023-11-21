import React, { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import QuizInfo from './QuizInfo/QuizInfo';
import QuizContent from './QuizContent/QuizContent';
import QuizNoContent from './QuizContent/QuizNoContent';
import Preloader from '../../components/common/Preloader';
import { quizesThunks } from '../../store/services/quiz/index';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const Quiz = () => {
  const locationParams = useLocation();
  const dispatch = useAppDispatch();
  const { quiz, status } = useAppSelector((state) => state.quizesReducer);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizesThunks.fetchQuiz(locationParams.state.quizId));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (status === 'loading') return (<Preloader />);

  return (
    <Container sx={{ height: '100%' }}>
       <Box pb={4}>
        <QuizInfo
          quizImg={quiz.img}
          quizTitle={quiz.title}
          quizDescription={quiz.description}/>
        {(quiz.questions && quiz.questions.length > 0) ? <QuizContent quiz={quiz} status={status}/> : <QuizNoContent />}
       </Box>
    </Container>
  );
};
export default Quiz;
