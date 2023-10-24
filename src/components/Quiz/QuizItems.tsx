import React, { useEffect, useCallback } from 'react';
import { Grid, Typography, styled } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import QuizItem from './QuizItem';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { quizesThunks } from '../../store/services/quizes';

const ProgressWrap = styled('div')(() => ({
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

  const isNetworkOk = error !== 'Network Error' && status !== 'failed';

  if (!isNetworkOk) return <Grid><Typography variant="h3">{error}</Typography></Grid>;
  if (isNetworkOk && status === 'loading') return (<ProgressWrap><CircularProgress color="inherit"/></ProgressWrap>);

  return (
    <Grid container spacing={2} sx={{ alignItems: 'stretch', paddingTop: 2, paddingBottom: 4 }}>
      {quizes.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <QuizItem item={item} />
        </Grid>))
      }
    </Grid>
  );
};
export default QuizItems;
