import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './Movies/slice';

export const store = configureStore({
  reducer: moviesSlice,
});
