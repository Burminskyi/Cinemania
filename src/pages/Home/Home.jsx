import HomePageHero from 'components/HomePageHero/HomePageHero';
import { UpcomingMovie } from 'components/UpcomingMovie/UpcomingMovie';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';

const Home = ({ weeklyTrendingMovies }) => {
  return (
    <>
      <HomePageHero />
      <WeeklyTrends weeklyTrendingMovies={weeklyTrendingMovies} />
      <UpcomingMovie />
    </>
  );
};

export default Home;
