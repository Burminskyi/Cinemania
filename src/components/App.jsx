import { lazy, useEffect, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Library from 'pages/Library/Library';
import { getWeeklyTrendingMovies } from 'services/getMovies';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  const [isTrendingMoviesLoading, setIsTrendingMoviesLoading] = useState(false);
  const [weeklyTrendingMovies, setWeeklyTrendingMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    return JSON.parse(localStorage.getItem('favoriteMovies')) ?? [];
  });

  useEffect(() => {
    const updateComponent = async () => {
      try {
        setIsTrendingMoviesLoading(true);
        localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
        const data = await getWeeklyTrendingMovies(page);
        setTotalPages(data.total_pages);
        setWeeklyTrendingMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsTrendingMoviesLoading(false);
      }
    };
    updateComponent();
  }, [favoriteMovies, page]);

  const addToLibrary = data => {
    setFavoriteMovies(prev => [...prev, { ...data, id: data.id }]);
  };

  const removeFromLibrary = id => {
    setFavoriteMovies(prev => prev.filter(movie => movie.id !== id));
  };

  const handlePageChange = page => {
    setPage(page);
  };

  const setTotalMoviesByNamePagesAmount = data => {
    setTotalPages(data);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <Home
                onChangePage={handlePageChange}
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
                totalPages={Number(totalPages)}
                currentPage={Number(page)}
                onChangePage={handlePageChange}
                setTotalMoviesByNamePagesAmount={
                  setTotalMoviesByNamePagesAmount
                }
                isTrendingMoviesLoading={isTrendingMoviesLoading}
              />
            }
          />
          <Route
            path="library"
            element={
              <Library
                onChangePage={handlePageChange}
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
