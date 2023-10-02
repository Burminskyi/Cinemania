import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTrendingMoviesLoading: false,
  weeklyTrendingMovies: [],
  totalPages: 1,
  page: 1,
  favoriteMovies: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setIsTrendingMoviesLoading: (state, action) => {
      state.isTrendingMoviesLoading = action.payload;
    },
    setWeeklyTrendingMovies: (state, action) => {
      state.weeklyTrendingMovies = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setFavoriteMovies: (state, action) => {
      state.favoriteMovies = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      // -----------GET TRENDING MOVIES-------------
      .addCase()
      .addCase()
      .addCase()
      // -----------GET TRAILER-------------
      .addCase()
      .addCase()
      .addCase()
      // -----------GET UPCOMING MOVIES-------------
      .addCase()
      .addCase()
      .addCase()
      // -----------GET WEEKLY TRENDING MOVIES-------------
      .addCase()
      .addCase()
      .addCase()
      // -----------GET MOVIES BY ID-------------
      .addCase()
      .addCase()
      .addCase()
      // -----------GET MOVIES BY Name-------------
      .addCase()
      .addCase()
      .addCase(),
});

export const {
  setIsTrendingMoviesLoading,
  setWeeklyTrendingMovies,
  setTotalPages,
  setPage,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
