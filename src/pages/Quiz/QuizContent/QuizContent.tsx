import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Divider, Button, Box,
  Card, CardActions, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Preloader from '../../../components/common/Preloader';
import routes from '../../../routes/routes';
import { IQuizItem, EStatusType } from '../../../store/services/quiz/constant';

type QuizContentProps = {
  quiz: IQuizItem;
  status: EStatusType
};

const QuizContent = ({ quiz, status }: QuizContentProps) => {
  const { questions } = quiz;
  const navigate = useNavigate();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [answer, setAnswer] = useState(false);
  const questionsLength = quiz.questions?.length;
  const ifLastQuestion = questionsLength && activeQuestion < (questionsLength - 1);
  // TODO remove console
  console.log('selectedAnswer', selectedAnswer, questions);

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
            {quiz.questions[activeQuestion].choices.map((el) => <FormControlLabel
              value={el}
              control={<Radio onChange={handleOptionChange}/>}
              label={el}
              key={el} />)}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <Divider />
        <CardActions sx={{ padding: '16px', justifyContent: 'flex-end' }}>
          <Button
            variant="outlined"
            size="medium"
            onClick={ifLastQuestion ? handleNexQuestion : handleFinishQuiz}
            endIcon={ifLastQuestion ? <ArrowForwardIosIcon /> : <CheckCircleIcon />}
            disabled={!answer}
            >
              {ifLastQuestion ? 'Next' : 'Finish'}
          </Button>
        </CardActions>
      </Card>}
      </Box>
  );
};
export default QuizContent;
