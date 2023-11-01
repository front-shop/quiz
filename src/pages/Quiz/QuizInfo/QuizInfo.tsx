import React from 'react';
import {
  Typography, Divider, CardMedia, Box
} from '@mui/material';
import { IQuizItem } from '../../../store/services/quiz/constant';

type QuizInfoProps = {
  quiz: IQuizItem;
};

const QuizInfo = ({ quiz }: QuizInfoProps) => {
  const { title, img, description } = quiz;

  return (
    <Box pb="32px">
      <Typography variant="h2" align='center' p='24px 0'>
        Quiz Page {title}
      </Typography>
      <Divider />
      <CardMedia
        component="img"
        height="120"
        image={img}
        alt="title"
      />
      <Typography variant="body1" p='24px 0'>
        {description}
      </Typography>
      <Divider/>
    </Box>
  );
};
export default QuizInfo;
