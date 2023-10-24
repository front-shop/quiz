import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs } from 'firebase/firestore';
import { moduleName } from './constant';
import { db } from '../../../firebase-config';

const quizesCollectionRef = collection(db, 'quizes');

const fetchQuizes = createAsyncThunk(`${moduleName}/fetchQuizes`, async () => {
  const data = await getDocs(quizesCollectionRef);
  return data.docs.map((quiz) => ({ ...quiz.data(), id: quiz.id }));
});

export default {
  fetchQuizes
};
