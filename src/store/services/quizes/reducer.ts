import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { moduleName, IQuizItem } from './constant';
import thunks from './thunks';

enum EStatusType {
  Idle = 'idle',
  Loading = 'loading',
  Success = 'success',
  Failed = 'failed'
}

interface IInitialState {
  quizes: IQuizItem[];
  status: EStatusType;
  error: string | null;
}

const initialState: IInitialState = {
  quizes: [],
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
  }
});

export default quizesReducer.reducer;
