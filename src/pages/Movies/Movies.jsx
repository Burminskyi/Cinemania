import HomePageHero from 'components/HomePageHero/HomePageHero';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
}) => {
  return (
    <>
      <HomePageHero />
      <MoviesList
        weeklyTrendingMovies={weeklyTrendingMovies}
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
    </>
  );
};

export default Movies;
