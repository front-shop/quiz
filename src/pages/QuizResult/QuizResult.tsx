import React, { useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { quizesThunks } from '../../store/services/quiz/index';

const QuizResult = () => {
  const locationParams = useLocation();
  const { answerResult } = useAppSelector((state) => state.quizesReducer);
  const dispatch = useAppDispatch();
  console.log('locationParams', locationParams);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizesThunks.getAnswers(locationParams.state.quizId));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);
  return (
    <Container sx={{ height: '100%' }}>
      answerResult - {answerResult}!
      <Typography variant="h2" align='center' p='24px 0'>
        Congratulations
      </Typography>
      <Typography variant="h4" align='center' p='24px 0'>
        You did a great job in the quiz!
      </Typography>
      <Typography variant="h4" align='center' p='24px 0'>
        Your score is - 80%
      </Typography>
    </Container>
  );
};
export default QuizResult;
