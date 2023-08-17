import { lazy, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Library from 'pages/Library/Library';
import { getWeeklyTrendingMovies } from 'services/getMovies';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  const [weeklyTrendingMovies, setweeklyTrendingMovies] = useState([]);

  useEffect(() => {
    const updateComponent = async () => {
      try {
        const data = await getWeeklyTrendingMovies();
        setweeklyTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateComponent();
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={<Home weeklyTrendingMovies={weeklyTrendingMovies} />}
          />
          <Route
            path="catalog"
            element={<Movies weeklyTrendingMovies={weeklyTrendingMovies} />}
          />
          <Route path="catalog/:movieId" element={<MovieDetails />} />
          <Route path="library" element={<Library />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
