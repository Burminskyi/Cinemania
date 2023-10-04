import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUpcomingMovies, getWeeklyTrendingMovies } from 'services/getMovies';

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

export const fetctUpcomingMovies = createAsyncThunk(
  'movies/fetctUpcomingMovies',
  async (_, thunkApi) => {
    try {
      const data = await getUpcomingMovies();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  weeklyTrendingMovies: [],
  upcomingMovie: null,
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
      state.favoriteMovies.push(action.payload);
    },
    removeFromFavoriteMovies: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(
        movie => movie.id !== action.payload
      );
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
      .addCase(fetctUpcomingMovies.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetctUpcomingMovies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.upcomingMovie = action.payload.results[0];
      })
      .addCase(fetctUpcomingMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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

export const { setPage, setFavoriteMovies, removeFromFavoriteMovies } =
  moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
