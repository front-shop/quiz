import React from 'react';
import { Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';

const QuizResult = () => {
  const locationParams = useLocation();
  const { quizResult } = locationParams.state;

  return (
    <Container sx={{ height: '100%' }}>
      <Typography variant="h2" align='center' p='24px 0'>
        Congratulations
      </Typography>
      <Typography variant="h4" align='center' p='24px 0 8px'>
        You did a great job in the quiz!
      </Typography>
      <Typography variant="h4" align='center' p='16px 0'>
        Your score is - {quizResult}%
      </Typography>
    </Container>
  );
};
export default QuizResult;
