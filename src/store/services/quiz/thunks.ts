import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection, getDocs, doc, getDoc
} from 'firebase/firestore';
import { moduleName } from './constant';
import { db } from '../../../firebase-config';

const quizesCollectionRef = collection(db, 'quizes');
const fetchQuizes = createAsyncThunk(`${moduleName}/fetchQuizes`, async () => {
  const data = await getDocs(quizesCollectionRef);
  return data.docs.map((quiz) => ({ ...quiz.data(), id: quiz.id }));
});

const fetchQuiz = createAsyncThunk(`${moduleName}/fetchQuiz`, async (quizId: string) => {
  const docRef = doc(db, 'quizes', quizId);
  const quizInfo = await getDoc(docRef);
  return quizInfo.exists() ? quizInfo.data() : console.log('No such quiz!');
});

export default {
  fetchQuizes,
  fetchQuiz
};
