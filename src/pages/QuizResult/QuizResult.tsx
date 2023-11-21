import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/hooks';
import calculateResult from '../../utils/calculateResult';
import { StyledContainer } from './styled';

const QuizResult = () => {
  const locationParams = useLocation();
  const { selectedAnswerList, amountOfQuiestions } = locationParams.state;
  const { answerResult } = useAppSelector((state) => state.quizesReducer);
  const [totalResult, setTotalResult] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        let correctAnswers = 0;
        if (answerResult.length > 0) {
          correctAnswers = selectedAnswerList.reduce((acc: number, cur: string) => {
            if ([...answerResult].includes(cur)) {
              // eslint-disable-next-line no-param-reassign
              acc += 1;
            }
            return acc;
          }, 0);
          setTotalResult(calculateResult(Number(amountOfQuiestions), correctAnswers));
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <StyledContainer>
      <Confetti numberOfPieces={50} gravity={0.05} opacity={0.8} />
      <Typography variant="h2" align='center' py={4} px={0} sx={{ fontWeight: 'bold' }}>
        Congratulations
      </Typography>
      <Typography variant="h4" align='center' py={3} px={0} sx={{ fontWeight: '600' }}>
        You did a great job in the quiz!
      </Typography>
      <Typography variant="h4" align='center' py={3} px={0} sx={{ fontWeight: '600' }}>
        Your score is - {totalResult}%
      </Typography>
    </StyledContainer>
  );
};
export default QuizResult;
