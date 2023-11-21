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
    <Box pb={4}>
      <Typography variant="h2" align='center' px={0} py={3}>
        Quiz Page {quizTitle}
      </Typography>
      <Divider />
      <CardMedia
        component="img"
        height="120"
        image={quizImg}
        alt={quizTitle}
        loading="lazy"
      />
      <Typography variant="body1" px={0} py={3}>
        {quizDescription}
      </Typography>
      <Divider/>
    </Box>
  );
};
export default QuizInfo;
