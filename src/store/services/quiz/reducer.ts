import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { moduleName, IQuizItem, EStatusType } from './constant';
import thunks from './thunks';

const initialQuiz:IQuizItem = {
  id: '',
  img: '',
  title: '',
  description: '',
  questions: []
};

interface IInitialState {
  quizes: IQuizItem[] | [];
  quiz: IQuizItem;
  status: EStatusType;
  error: string | null;
}

const initialState: IInitialState = {
  quizes: [],
  quiz: initialQuiz,
  status: EStatusType.Idle,
  error: null
};

export const quizesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      thunks.fetchQuizes.pending,
      (state: IInitialState) => {
        state.status = EStatusType.Loading;
      }
    );
    builder.addCase(thunks.fetchQuizes.fulfilled, (state, action) => {
      state.status = EStatusType.Success;
      state.quizes = action.payload;
    });
    builder.addCase(thunks.fetchQuizes.rejected, (state, action) => {
      state.status = EStatusType.Failed;
      state.error = action.error.message || 'Something went wrong';
    });
    builder.addCase(thunks.fetchQuiz.fulfilled, (state, action) => {
      console.log('satae', state, 'action', action.payload);
      if (!action.payload) {
        return;
      }
      state.quiz = action.payload;
      console.log('state.quiz', state.quiz);
    });
  }
});

export default quizesReducer.reducer;
