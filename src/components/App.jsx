import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Library from 'pages/Library/Library';
import { addThemeStyles } from 'services/themeSwitcher';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeeklyTrendingMovies, setPage } from 'redux/Movies/slice';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  const page = useSelector(state => state.movies.page);

  const dispatch = useDispatch();

  useEffect(() => {
    addThemeStyles();
    dispatch(fetchWeeklyTrendingMovies(page));
  }, [dispatch, page]);

  const handlePageChange = page => {
    setPage(page);
  };

  const setTotalMoviesByNamePagesAmount = data => {
    // setTotalPages(data);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home onChangePage={handlePageChange} />} />
          <Route
            path="catalog"
            element={
              <Movies
                currentPage={Number(page)}
                onChangePage={handlePageChange}
                setTotalMoviesByNamePagesAmount={
                  setTotalMoviesByNamePagesAmount
                }
              />
            }
          />
          <Route
            path="library"
            element={<Library onChangePage={handlePageChange} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
