// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useCallback } from 'react';
import { Grid, styled } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import QuizItem from './QuizItem';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { quizesThunks } from '../../store/services/quizes';

const ProgressWrapper = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '400px',
  width: '100%'
}));

const QuizItems = () => {
  const { quizes, status, error } = useAppSelector((state) => state.quizesReducer);
  const dispatch = useAppDispatch();

  const fetchData = useCallback(async () => {
    try {
      await dispatch(quizesThunks.fetchQuizes());
    } catch (e) {
      // eslint-disable-next-line
      console.error(e);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const quizesList = quizes.map((item) => (
    <Grid item xs={12} sm={6} md={4} key={item.id}>
      <QuizItem item={item} />
    </Grid>
  ));

  const isNetworkOk = error !== 'Network Error' && status !== 'failed';

  return (
    <Grid container spacing={2} sx={{ alignItems: 'stretch', paddingTop: 2, paddingBottom: 4 }}>
      {isNetworkOk && (
        <>
          {status === 'loading' && <ProgressWrapper><CircularProgress color="inherit"/></ProgressWrapper>}
          {status === 'success' && <>{quizesList}</>}
        </>
      )}
    </Grid>
  );
};
export default QuizItems;
