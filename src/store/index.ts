import { configureStore } from '@reduxjs/toolkit';
import pageInfoReducer from './pageInfoSlice';

export const store = configureStore({
  reducer: {
    pageInfo: pageInfoReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;