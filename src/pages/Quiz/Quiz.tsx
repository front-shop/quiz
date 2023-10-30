import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container, Typography, Divider, CardMedia, Button, Box
} from '@mui/material';
import Preloader from '../../components/common/Preloader';
import { quizesThunks } from '../../store/services/quiz/index';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';

const Quiz = () => {
  const locationParams = useLocation();
  const { quiz, status } = useAppSelector((state) => state.quizesReducer);
  const dispatch = useAppDispatch();
  console.log('quiz', quiz, locationParams);

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
      <Typography variant="h2" align='center' p='24px 0'>
        Quiz Page {quiz.title}
      </Typography>
      <Divider />
      <CardMedia
        component="img"
        height="120"
        image={quiz.img}
        alt="quiz.title"
      />
      <Typography variant="body1" p='24px 0'>
        {quiz.description}
      </Typography>
      <Divider />
      <Box p="24px 0" textAlign='center'>
        <Button variant="outlined" size="medium">Start the {quiz.title} Quiz</Button>
      </Box>
    </Container>
  );
};
export default Quiz;
