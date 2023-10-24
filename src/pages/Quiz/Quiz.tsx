import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

const Quiz = () => {
  const { state } = useLocation();

  return (
    <Typography variant="h3">
      Quiz Page {state.quizId}
    </Typography>
  );
};
export default Quiz;
