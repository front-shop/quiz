import React from 'react';
import { Typography, Box } from '@mui/material';
import QuizIcon from '@mui/icons-material/Quiz';

const QuizContent = () => (
  <Box sx={{ textAlign: 'center' }}>
    <Typography variant='h3' p="16px"><QuizIcon fontSize='large'/></Typography>
    <Typography variant="h4">There are no questions in this quiz yet</Typography>
  </Box>
);
export default QuizContent;
