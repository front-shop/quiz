import React, { useEffect, useState } from 'react';
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
  const [activeQuestion, setActiveQuestion] = useState(0);

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
    setActiveQuestion((prev) => prev + 1);
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
      {(quiz.questions?.length) && <Card sx={{ maxWidth: '100%', paddingTop: '8px' }}>
        <CardContent>
        <FormControl sx={{ width: '100%' }}>
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{ paddingBottom: '16px', fontSize: '1.2rem' }}>
              {quiz.questions && quiz.questions[activeQuestion].question}
          </FormLabel>
          <Divider sx={{ marginBottom: '16px' }}/>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={quiz.questions[activeQuestion].choices[0]}
            name="radio-buttons-group"
          >
          {quiz.questions[activeQuestion].choices.map((el) => {
            console.log('el', el);
            return <FormControlLabel value={el} control={<Radio />} label={el} key={el} />;
          })}
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
      </Card>}
      </Box>
    </Container>
  );
};
export default Quiz;
