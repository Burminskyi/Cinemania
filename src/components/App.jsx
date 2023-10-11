import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Library from 'pages/Library/Library';

import { addThemeStyles } from 'services/themeSwitcher';

import { fetchWeeklyTrendingMovies, setPage } from 'redux/Movies/slice';
import { selectPage, selectThemeStyle } from 'redux/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  const page = useSelector(selectPage);
  const themeStyle = useSelector(selectThemeStyle);

  const [searchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get('page'));

  const dispatch = useDispatch();

  useEffect(() => {
    addThemeStyles(themeStyle);
  }, [themeStyle]);

  useEffect(() => {
    if (paramsPage) return;
    dispatch(fetchWeeklyTrendingMovies(page));
  }, [dispatch, page, paramsPage]);

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
