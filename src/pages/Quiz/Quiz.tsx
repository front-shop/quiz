import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Container, Typography, Divider, CardMedia, Button, Box,
  Card, CardActions, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Preloader from '../../components/common/Preloader';
import { quizesThunks } from '../../store/services/quiz/index';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import routes from '../../routes/routes';

const Quiz = () => {
  const locationParams = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { quiz, status } = useAppSelector((state) => state.quizesReducer);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [answer, setAnswer] = useState(false);
  const questionsLength = quiz.questions?.length;
  // TODO remove console
  console.log('selectedAnswer', selectedAnswer);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(quizesThunks.fetchQuiz(locationParams.state.quizId));
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  const handleNexQuestion = () => {
    setActiveQuestion((prev) => prev + 1);
    setAnswer(false);
  };

  const handleOptionChange = (e: React.SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    setAnswer(true);
    setSelectedAnswer((prevAnswer) => [...prevAnswer, target.value]);
  };

  const handleFinishQuiz = () => {
    navigate(`/${routes.quiz.resultPage}`);
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
      <Box mt="32px">
      {(quiz.questions?.length) && <Card sx={{ maxWidth: '100%', paddingTop: '8px' }}>
        <CardContent>
        <FormControl sx={{ width: '100%' }}>
          <FormLabel
            id={quiz.title}
            sx={{ paddingBottom: '16px', fontSize: '1.2rem' }}>
              {quiz.questions && quiz.questions[activeQuestion].question}
          </FormLabel>
          <Divider sx={{ marginBottom: '16px' }}/>
          <RadioGroup
            aria-labelledby={quiz.title}
            name="radio-buttons-group"
          >
          {quiz.questions[activeQuestion].choices.map((el) => {
            console.log('el', el);
            return <FormControlLabel
              value={el}
              control={<Radio onChange={handleOptionChange}/>}
              label={el}
              key={el} />;
          })}
          </RadioGroup>
        </FormControl>
        </CardContent>
        <Divider />
        <CardActions sx={{ padding: '16px', justifyContent: 'flex-end' }}>
          {(questionsLength && activeQuestion < (questionsLength - 1))
            ? <Button
            variant="outlined"
            size="medium"
            onClick={handleNexQuestion}
            endIcon={<ArrowForwardIosIcon />}
            disabled={!answer}
            >
              Next
          </Button>
            : <Button
            variant="outlined"
            size="medium"
            onClick={handleFinishQuiz}
            endIcon={<CheckCircleIcon />}
            disabled={!answer}
            >
              Finish
          </Button>
        }
        </CardActions>
      </Card>}
      </Box>
    </Container>
  );
};
export default Quiz;
