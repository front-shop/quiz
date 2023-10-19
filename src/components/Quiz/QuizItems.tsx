// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect } from 'react';
import { Grid, styled } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import QuizItem from './QuizItem';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { quizesThunks } from '../../store/services/quizes';

const CircularProgressWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '400px',
  width: '100%'
}));

const QuizItems = () => {
  const { quizes, status, error } = useAppSelector((state) => state.quizesReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      try {
        await dispatch(quizesThunks.fetchQuizes());
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <Grid container spacing={2} sx={{ alignItems: 'stretch', paddingTop: 2, paddingBottom: 4 }}>
      {error !== 'Network Error' && status !== 'failed' && (
          <>
            {status === 'loading' ? (
              <CircularProgressWrapper>
                <CircularProgress color="inherit" />
              </CircularProgressWrapper>
            ) : (
              <>
              {quizes.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <QuizItem item={item} />
                </Grid>
              ))}
              </>
            )}
          </>
      )}
    </Grid>
  );
};
export default QuizItems;
