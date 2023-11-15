import React, { useState, useEffect } from 'react';
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
import calculateResult from '../../../utils/calculateResult';
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
  const pathToResultPage = `/${routes.quiz.key}/${title}/${routes.quiz.resultPage}`;

  const dispatch = useAppDispatch();
  const { answerResult } = useAppSelector((state) => state.quizesReducer);

  const [checkedAnswer, setCheckedAnswer] = useState(''); // checked answer
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0); // number of active quiestion
  const [selectedAnswerList, setSelectedAnswerList] = useState<string[]>([]); // List of answers
  const [isDisabledBtn, setIsDisabledBtn] = useState(true); // disable nextBtn
  const [isFinishTime, setIsFinishTime] = useState(false); // finishes time for quiz

  const amountOfQuiestions = questions?.length; // number of all questions
  const amountOfAnswers = selectedAnswerList.length; // number of answers
  const isLastQuestion = amountOfQuiestions && activeQuestionIndex < (amountOfQuiestions - 1);

  const handleNexQuestion = () => {
    if (amountOfAnswers > activeQuestionIndex + 1) {
      setIsDisabledBtn(false);
      setCheckedAnswer(selectedAnswerList[activeQuestionIndex + 1]);
    } else {
      setIsDisabledBtn(true);
    }
    setActiveQuestionIndex((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setCheckedAnswer(selectedAnswerList[activeQuestionIndex - 1]);
    setActiveQuestionIndex((prev) => prev - 1);
    setIsDisabledBtn(false);
  };

  const handleOptionChange = (el: string): void => {
    if (amountOfAnswers >= activeQuestionIndex) {
      setIsDisabledBtn(false);
    } else {
      setIsDisabledBtn(true);
    }
    if (amountOfAnswers === activeQuestionIndex + 1 || amountOfAnswers > activeQuestionIndex) {
      setSelectedAnswerList((prevAnswer) => {
        prevAnswer.splice(activeQuestionIndex, 1, el);
        return [...prevAnswer];
      });
    } else {
      setSelectedAnswerList([...selectedAnswerList, el]);
    }
    setCheckedAnswer(el);
  };

  const handleFinishQuiz = async () => {
    try {
      await dispatch(quizesThunks.getAnswers(locationParams.state.quizId));
      let correctAnswers = 0;
      if (answerResult.length > 0) {
        correctAnswers = selectedAnswerList.reduce((acc: number, cur: string) => {
          if ([...answerResult].includes(cur)) {
            // eslint-disable-next-line no-param-reassign
            acc += 1;
          }
          return acc;
        }, 0);
      }
      const totalResult = calculateResult(Number(amountOfQuiestions), correctAnswers);
      navigate(pathToResultPage, { state: { quizId: id, quizResult: totalResult } });
    } catch (error) {
      console.warn(error);
    }
  };

  const finishedTimer = (isFinishedTime: boolean) => {
    setIsFinishTime(isFinishedTime);
  };

  useEffect(() => {
    if (isFinishTime) {
      handleFinishQuiz();
    }
  }, [isFinishTime]);

  if (status === 'loading') return (<Preloader />);

  return (
      <Box mt="32px">
      {(amountOfQuiestions) && <Card sx={{ maxWidth: '100%', paddingTop: '8px' }}>
        <Timer time={TIMERTIME} finishedTimer={finishedTimer} />
        <CardContent>
        <Typography variant="body1" pb="16px">
          {`${activeQuestionIndex + 1} / ${questions.length}`}
        </Typography>
          <FormControl sx={{ width: '100%' }}>
            <FormLabel
              id={quiz.title}
              sx={{ paddingBottom: '16px', fontSize: '1.2rem' }}>
                {quiz.questions && quiz.questions[activeQuestionIndex].question}
            </FormLabel>
            <Divider sx={{ marginBottom: '16px' }}/>
            <RadioGroup
              aria-labelledby={quiz.title}
              name="radio-buttons-group"
            >
            {questions[activeQuestionIndex].choices.map((el) => <FormControlLabel
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
          {activeQuestionIndex > 0 && <Box sx={{ marginRight: 'auto' }}>
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
              disabled={isDisabledBtn}
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
