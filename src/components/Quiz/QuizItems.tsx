// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Grid } from '@mui/material';
import { db } from '../../firebase-config';
import QuizItem from './QuizItem';

const QuizItems = () => {
  const [quizInfo, setQuizInfo] = useState([]);
  const quizesCollectionRef = collection(db, 'quizes');

  useEffect(() => {
    const getQuizes = async () => {
      const data = await getDocs(quizesCollectionRef);
      setQuizInfo(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getQuizes();
  }, []);

  return (
    <Grid container spacing={2} sx={{ alignItems: 'stretch', paddingTop: 2, paddingBottom: 4 }}>
      {quizInfo.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <QuizItem item={item} />
        </Grid>
      ))}
    </Grid>
  );
};
export default QuizItems;
