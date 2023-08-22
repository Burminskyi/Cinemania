import HomePageHero from 'components/HomePageHero/HomePageHero';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
  totalPages,
  currentPage,
  onChangePage,
  setTotalMoviesByNamePagesAmount,
  isTrendingMoviesLoading,
}) => {
  return (
    <>
      <HomePageHero
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
      <MoviesList
        weeklyTrendingMovies={weeklyTrendingMovies}
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
        totalPages={totalPages}
        currentPage={currentPage}
        onChangePage={onChangePage}
        setTotalMoviesByNamePagesAmount={setTotalMoviesByNamePagesAmount}
        isTrendingMoviesLoading={isTrendingMoviesLoading}
      />
    </>
  );
};

export default Movies;
