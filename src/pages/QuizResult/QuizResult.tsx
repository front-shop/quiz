import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Typography
} from '@mui/material';

const QuizResult = () => {
  // TODO:remove console
  console.log('QuizResult');
  return (
    <Container sx={{ height: '100%' }}>
      <Typography variant="h2" align='center' p='24px 0'>
        Congratulations
      </Typography>
      <Typography variant="h4" align='center' p='24px 0'>
        You did a great job in the quiz!
      </Typography>
      <Typography variant="h4" align='center' p='24px 0'>
        Your score is - <Typography variant="h4">80%</Typography>
      </Typography>
    </Container>
  );
};
export default QuizResult;
