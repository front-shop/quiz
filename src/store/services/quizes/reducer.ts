// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { moduleName } from './constant';
import thunks from './thunks';
import { IQuizItemProps } from '../../../types/quiz';

interface IInitialState {
  quizes: IQuizItemProps[];
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
}

const initialState: IInitialState = {
  quizes: [],
  status: 'idle',
  error: null
};

export const quizesReducer = createSlice({
  name: moduleName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        thunks.fetchQuizes.pending,
        (state: IInitialState) => {
          state.status = 'loading';
        }
      )
      .addCase(
        thunks.fetchQuizes.fulfilled,
        (state: IInitialState, action: PayloadAction<string>) => {
          state.status = 'success';
          state.quizes = action.payload;
        }
      )
      .addCase(thunks.fetchQuizes.rejected, (state: IInitialState, action: PayloadAction<string>) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  }
});

export default quizesReducer.reducer;
