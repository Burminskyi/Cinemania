import HomePageHero from 'components/HomePageHero/HomePageHero';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/getMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const updateComponent = async () => {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateComponent();
  }, []);

  return (
    <>
      <HomePageHero/>
      <h1>Trending today</h1>
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
