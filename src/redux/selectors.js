export const selectLoadingStatus = state => state.movies.isLoading;
export const selectWeeklyTrendingMovies = state =>
  state.movies.weeklyTrendingMovies;
export const selectRequestedMovies = state => state.movies.requestedMovies;
export const selectTrendingMovie = state => state.movies.trendingMovie;
export const selectUpcomingMovie = state => state.movies.upcomingMovie;
export const selectTotalPages = state => state.movies.totalPages;
export const selectPage = state => state.movies.page;
export const selectFavoriteMovies = state => state.movies.favoriteMovies;
export const selectError = state => state.movies.error;
export const selectTrailerURL = state => state.movies.trailerURL;
export const selectTotalPagesOfRequest = state =>
  state.movies.totalPagesOfRequest;
