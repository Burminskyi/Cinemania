import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import {
  getMoviesByName,
  getTrailer,
  getTrendingMovies,
  getUpcomingMovies,
  getWeeklyTrendingMovies,
} from 'services/getMovies';

export const fetchWeeklyTrendingMovies = createAsyncThunk(
  'movies/fetchWeeklyTrendingMovies',
  async (page, thunkApi) => {
    try {
      const data = await getWeeklyTrendingMovies(page < 500 ? page : 500);
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

export const fetchTrendingMoviesOfTheDay = createAsyncThunk(
  'movies/fetchTrendingMoviesOfTheDay',
  async (_, thunkApi) => {
    try {
      const data = await getTrendingMovies();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchTrailer = createAsyncThunk(
  'movies/fetchTrailer',
  async (id, thunkApi) => {
    try {
      const data = await getTrailer(id);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchMoviesByName = createAsyncThunk(
  'movies/fetchMoviesByName',
  async (params, thunkApi) => {
    const { query, page } = params;
    try {
      const data = await getMoviesByName(query, page);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  weeklyTrendingMovies: null,
  requestedMovies: null,
  trendingMovie: null,
  upcomingMovie: null,
  totalPages: 1,
  page: 1,
  favoriteMovies: [],
  error: null,
  trailerURL: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      // const amountOfPages = state.totalPages < 500 ? state.totalPages : 500;
      // if (action.payload >= amountOfPages) {
      //   state.page = amountOfPages;
      // } else {
      state.page = action.payload;
      // }
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
      // -----------GET DAILY TRENDING MOVIES-------------
      .addCase(fetchTrendingMoviesOfTheDay.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTrendingMoviesOfTheDay.fulfilled, (state, action) => {
        state.isLoading = false;
        const movies = action.payload.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        state.trendingMovie = randomMovie;
      })
      .addCase(fetchTrendingMoviesOfTheDay.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //   // -----------GET TRAILER-------------
      .addCase(fetchTrailer.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchTrailer.fulfilled, (state, action) => {
        state.isLoading = false;
        const { key } = action.payload.results.find(
          item => item.name === 'Official Trailer'
        );
        if (!key) throw new Error('No data!');
        state.trailerURL = `https://www.youtube.com/embed/${key}`;
      })
      .addCase(fetchTrailer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
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
      })
      //   // -----------GET MOVIES BY NAME-------------
      .addCase(fetchMoviesByName.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMoviesByName.fulfilled, (state, action) => {
        state.isLoading = false;
        if (!action.payload) return;
        state.requestedMovies = action.payload.results;
        state.totalPages = action.payload.total_pages;
        state.weeklyTrendingMovies = null;
      })
      .addCase(fetchMoviesByName.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setPage, setFavoriteMovies, removeFromFavoriteMovies } =
  moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;