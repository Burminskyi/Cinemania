import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isTrendingMoviesLoading: false,
  weeklyTrendingMovies: [],
  totalPages: 1,
  page: 1,
//   favoriteMovies: JSON.parse(localStorage.getItem('favoriteMovies')) ?? [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
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

// export const { isTrendingMoviesLoading, weeklyTrendingMovies, totalPages, page } = moviesSlice.actions;

// export default moviesSlice.reducer;
