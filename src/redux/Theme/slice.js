import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  themeStyle: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeStyle: (state, action) => {
      state.themeStyle = state.themeStyle === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { setThemeStyle } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;
