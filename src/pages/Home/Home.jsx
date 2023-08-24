import HomePageHero from 'components/HomePageHero/HomePageHero';
import { UpcomingMovie } from 'components/UpcomingMovie/UpcomingMovie';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';
import { useEffect } from 'react';

const Home = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
  onChangePage,
}) => {
  useEffect(() => {
    onChangePage(1);
  }, [onChangePage]);

  return (
    <>
      <HomePageHero
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
      <WeeklyTrends
        weeklyTrendingMovies={weeklyTrendingMovies}
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
      <UpcomingMovie
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
    </>
  );
};

export default Home;
