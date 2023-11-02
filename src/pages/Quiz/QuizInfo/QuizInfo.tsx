import React from 'react';
import {
  Typography, Divider, CardMedia, Box
} from '@mui/material';

type QuizInfoProps = {
  quizTitle?: string;
  quizImg?: string;
  quizDescription?: string;
};

const QuizInfo = (props: QuizInfoProps) => {
  const { quizTitle, quizImg, quizDescription } = props;

  return (
    <Box pb="32px">
      <Typography variant="h2" align='center' p='24px 0'>
        Quiz Page {quizTitle}
      </Typography>
      <Divider />
      <CardMedia
        component="img"
        height="120"
        image={quizImg}
        alt={quizTitle}
      />
      <Typography variant="body1" p='24px 0'>
        {quizDescription}
      </Typography>
      <Divider/>
    </Box>
  );
};
export default QuizInfo;
