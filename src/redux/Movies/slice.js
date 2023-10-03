import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWeeklyTrendingMovies } from 'services/getMovies';

export const fetchWeeklyTrendingMovies = createAsyncThunk(
  'movies/fetchWeeklyTrendingMovies',
  async (page, thunkApi) => {
    try {
      const data = await getWeeklyTrendingMovies(page);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  weeklyTrendingMovies: [],
  totalPages: 1,
  page: 1,
  favoriteMovies: [],
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // isLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
    // setWeeklyTrendingMovies: (state, action) => {
    //   state.weeklyTrendingMovies = action.payload;
    // },
    // setTotalPages: (state, action) => {
    //   state.totalPages = action.payload;
    // },
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
      //   .addCase()
      //   .addCase()
      //   .addCase()
      //   // -----------GET TRAILER-------------
      //   .addCase()
      //   .addCase()
      //   .addCase()
      //   // -----------GET UPCOMING MOVIES-------------
      //   .addCase()
      //   .addCase()
      //   .addCase()
      // -----------GET WEEKLY TRENDING MOVIES-------------
      .addCase(fetchWeeklyTrendingMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchWeeklyTrendingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.weeklyTrendingMovies = action.payload.results;
        state.totalPages = action.payload.total_pages;
      })
      .addCase(fetchWeeklyTrendingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  //   // -----------GET MOVIES BY ID-------------
  //   .addCase()
  //   .addCase()
  //   .addCase()
  //   // -----------GET MOVIES BY Name-------------
  //   .addCase()
  //   .addCase()
  //   .addCase(),
});

export const {
  setIsTrendingMoviesLoading,
  setWeeklyTrendingMovies,
  setTotalPages,
  setPage,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
