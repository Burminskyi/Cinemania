import HomePageHero from 'components/HomePageHero/HomePageHero';
import { UpcomingMovie } from 'components/UpcomingMovie/UpcomingMovie';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';

const Home = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies
}) => {
  return (
    <>
      <HomePageHero />
      <WeeklyTrends
        weeklyTrendingMovies={weeklyTrendingMovies}
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
      <UpcomingMovie />
    </>
  );
};

export default Home;
