import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Library from 'pages/Library/Library';

import { addThemeStyles } from 'services/themeSwitcher';

import { fetchWeeklyTrendingMovies, setPage } from 'redux/Movies/slice';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const paramsPage = searchParams.get('page');
  if (paramsPage) {
    dispatch(setPage(paramsPage));
  }

  const page = useSelector(state => state.movies.page);

  useEffect(() => {
    addThemeStyles();
    dispatch(fetchWeeklyTrendingMovies(page));
  }, [dispatch, page]);

  const handlePageChange = page => {
    dispatch(setPage(page));
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home onChangePage={handlePageChange} />} />
          <Route path="catalog" element={<Movies />} />
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
