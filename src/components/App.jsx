import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Library from 'pages/Library/Library';

import { addThemeStyles } from 'services/themeSwitcher';

import { fetchWeeklyTrendingMovies, setPage } from 'redux/Movies/slice';
import { selectPage, selectRequestedMovies } from 'redux/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  const requestedMovies = useSelector(selectRequestedMovies);
  console.log('requestedMovies: ', requestedMovies);
  const page = useSelector(selectPage);
  console.log('page: ', page);

  const [searchParams, setSearchParams] = useSearchParams();
  const paramsPage = Number(searchParams.get('page'));

  const dispatch = useDispatch();
  // let page;

  // if (paramsPage) {
  //   // if (paramsPage > 500) {
  //   //   setSearchParams({ page: 500 });
  //   // }
  //   page = paramsPage;
  //   dispatch(setPage(paramsPage > 500 ? 500 : paramsPage));
  // } else {
  //   page = 1;
  // }

  useEffect(() => {
    if (requestedMovies) return;
    if (!paramsPage) return;
    if (paramsPage > 500) {
      setSearchParams({ page: 500 });
    }
    addThemeStyles();

    dispatch(setPage(paramsPage));
    dispatch(fetchWeeklyTrendingMovies(paramsPage));
  }, [dispatch, paramsPage, requestedMovies, setSearchParams]);

  useEffect(() => {
    if (requestedMovies) return;
    if (paramsPage) return;
    addThemeStyles();

    dispatch(fetchWeeklyTrendingMovies(page));
  }, [dispatch, page, paramsPage, requestedMovies]);

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
