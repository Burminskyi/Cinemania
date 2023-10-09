import { useEffect } from 'react';

import HomePageHero from 'components/Hero/Hero';
import { UpcomingMovie } from 'components/UpcomingMovie/UpcomingMovie';
import WeeklyTrends from 'components/WeeklyTrends/WeeklyTrends';

const Home = ({ onChangePage }) => {
  useEffect(() => {
    
    onChangePage(1);
  }, [onChangePage]);

  return (
    <>
      <HomePageHero />
      <WeeklyTrends />
      <UpcomingMovie />
    </>
  );
};

export default Home;
