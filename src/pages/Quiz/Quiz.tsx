import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container, Typography, Divider, CardMedia, Button, Box,
  Card, CardActions, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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

  const handleStartQuiz = () => {
    console.log('start quiz');
  };

  const handleNexQuestion = () => {
    console.log('next quiz question');
  };

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
        <Button variant="outlined" size="medium" onClick={handleStartQuiz}>Start the {quiz.title} Quiz</Button>
      </Box>
      <Box>
      <Card sx={{ maxWidth: '100%', paddingTop: '8px' }}>
        <CardContent>
        <FormControl sx={{ width: '100%' }}>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ paddingBottom: '16px', fontSize: '1.2rem' }}>
              Gender
          </FormLabel>
          <Divider sx={{ marginBottom: '16px' }}/>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="question 1"
            name="radio-buttons-group"
          >
            <FormControlLabel value="question 1" control={<Radio />} label="question 1" />
            <FormControlLabel value="question 2" control={<Radio />} label="question 2" />
            <FormControlLabel value="question 3" control={<Radio />} label="question 3" />
          </RadioGroup>
        </FormControl>
        </CardContent>
        <Divider />
        <CardActions sx={{ padding: '16px', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            size="medium"
            onClick={handleNexQuestion}
            endIcon={<ArrowForwardIosIcon />}
            >
              Next
          </Button>
        </CardActions>
      </Card>
      </Box>
    </Container>
  );
};
export default Quiz;
