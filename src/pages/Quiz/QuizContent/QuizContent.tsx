import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Divider, Button, Box,
  Card, CardActions, CardContent, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Preloader from '../../../components/common/Preloader';
import routes from '../../../routes/routes';
import { IQuizItem, EStatusType } from '../../../store/services/quiz/constant';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { quizesThunks } from '../../../store/services/quiz/index';
import calculatePersentage from '../../../utils/calculatePersetage';
import Timer from '../../../components/Timer/Timer';

type QuizContentProps = {
  quiz: IQuizItem;
  status: EStatusType
};

const QuizContent = ({ quiz, status }: QuizContentProps) => {
  const locationParams = useLocation();
  const { questions, title, id } = quiz;
  const navigate = useNavigate();
  // TODO get Time from form
  const TIMERTIME = 30;

  const dispatch = useAppDispatch();
  const { answerResult } = useAppSelector((state) => state.quizesReducer);

  const [checkedAnswer, setCheckedAnswer] = useState('');
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);

  const questionsLength = questions?.length;
  const isLastQuestion = questionsLength && activeQuestion < (questionsLength - 1);

  const handleNexQuestion = () => {
    if (selectedAnswers.length > activeQuestion + 1) {
      setIsAnswered(true);
      setCheckedAnswer(selectedAnswers[activeQuestion + 1]);
    } else {
      setIsAnswered(false);
    }
    setActiveQuestion((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setCheckedAnswer(selectedAnswers[activeQuestion - 1]);
    setActiveQuestion((prev) => prev - 1);
    setIsAnswered(true);
  };

  const handleOptionChange = (el: string): void => {
    setSelectedAnswers((prevAnswer) => {
      if (selectedAnswers.length > activeQuestion + 1) {
        prevAnswer.splice(activeQuestion, 1, el);
        return prevAnswer;
      }
      return [...prevAnswer, el];
    });
    if (selectedAnswers.length >= activeQuestion) {
      setIsAnswered(true);
    } else {
      setIsAnswered(false);
    }
    setCheckedAnswer(el);
  };

  const handleFinishQuiz = async () => {
    await dispatch(quizesThunks.getAnswers(locationParams.state.quizId));
    const totalArr = new Set(selectedAnswers.concat(answerResult));
    const result = calculatePersentage(Number(questionsLength), totalArr.size);
    navigate(`/${routes.quiz.key}/${title}/${routes.quiz.resultPage}`, { state: { quizId: id, quizResult: result } });
  };

  const finishedTimer = () => {
    navigate(`/${routes.quiz.key}/${title}/${routes.quiz.resultPage}`, { state: { quizId: id, quizResult: 0 } });
  };

  if (status === 'loading') return (<Preloader />);

  return (
      <Box mt="32px">
      {(questionsLength) && <Card sx={{ maxWidth: '100%', paddingTop: '8px' }}>
        <Timer time={TIMERTIME} finishedTimer={finishedTimer} />
        <CardContent>
        <Typography variant="body1" pb="16px">
          {`${activeQuestion + 1} / ${questions.length}`}
        </Typography>
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
            {questions[activeQuestion].choices.map((el) => <FormControlLabel
                value={el}
                checked={checkedAnswer === el}
                onChange={() => handleOptionChange(el)}
                control={<Radio />}
                key={el}
                label={el}/>)}
            </RadioGroup>
          </FormControl>
        </CardContent>
        <Divider />
        <CardActions sx={{ padding: '16px' }}>
          {activeQuestion > 0 && <Box sx={{ marginRight: 'auto' }}>
            <Button
              variant="outlined"
              size="medium"
              onClick={handlePrevQuestion}
              startIcon={<ArrowBackIosIcon /> }
              >
                Previous
            </Button>
          </Box>}
          <Box sx={{ marginLeft: 'auto' }}>
            <Button
              variant="outlined"
              size="medium"
              onClick={isLastQuestion ? handleNexQuestion : handleFinishQuiz}
              endIcon={isLastQuestion ? <ArrowForwardIosIcon /> : <CheckCircleIcon />}
              disabled={!isAnswered}
              >
                {isLastQuestion ? 'Next' : 'Finish'}
            </Button>
          </Box>
        </CardActions>
      </Card>
      }
    </Box>
  );
};
export default QuizContent;
