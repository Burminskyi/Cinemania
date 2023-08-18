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
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('favoriteMovies')) ?? [];
  });

  useEffect(() => {
    const updateComponent = async () => {
      try {
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        const data = await getWeeklyTrendingMovies();
        setweeklyTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateComponent();
  }, [favoriteMovies]);

  const addToLibrary = data => {
    setFavoriteMovies(prev => [...prev, { ...data, id: data.id }]);
  };

   const removeFromLibrary = id => {
      setFavoriteMovies(prev => prev.filter(movie => movie.id !== id));
    };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                weeklyTrendingMovies={weeklyTrendingMovies}
                addToLibrary={addToLibrary}
                removeFromLibrary={removeFromLibrary}
                favoriteMovies={favoriteMovies}
              />
            }
          />
          <Route
            path="catalog"
            element={
              <Movies
                weeklyTrendingMovies={weeklyTrendingMovies}
                addToLibrary={addToLibrary}
                removeFromLibrary={removeFromLibrary}
                favoriteMovies={favoriteMovies}
              />
            }
          />
          <Route path="catalog/:movieId" element={<MovieDetails />} />
          <Route
            path="library"
            element={
              <Library
                favoriteMovies={favoriteMovies}
                addToLibrary={addToLibrary}
                removeFromLibrary={removeFromLibrary}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
