import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchMoviesByName,
  fetchWeeklyTrendingMovies,
  setPage,
} from 'redux/Movies/slice';

import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MyPagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { StyledMoviesList } from './MoviesList.styled';
import {
  selectLoadingStatus,
  selectRequestedMovies,
  selectTotalPages,
  selectTotalPagesOfRequest,
  selectWeeklyTrendingMovies,
} from 'redux/selectors';

export const MoviesList = () => {
  const totalPages = useSelector(selectTotalPages);
  const totalPagesOfRequest = useSelector(selectTotalPagesOfRequest);
  const isLoading = useSelector(selectLoadingStatus);
  const requestedMovies = useSelector(selectRequestedMovies);
  const weeklyTrendingMovies = useSelector(selectWeeklyTrendingMovies);

  const [searchParams, setSearchParams] = useSearchParams();

  const componentRef = useRef(null);

  const [query, setQuery] = useState(null);

  const dispatch = useDispatch();

  const paramsPage = Number(searchParams.get('page'));
  const paramsQuery = searchParams.get('query');

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    if (paramsQuery) return;
    if (!paramsPage) return;
    if (paramsPage > 500) {
      setSearchParams({ page: 500 });
    }

    dispatch(setPage(paramsPage));
    dispatch(fetchWeeklyTrendingMovies(paramsPage));
  }, [dispatch, paramsPage, paramsQuery, requestedMovies, setSearchParams]);

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    if (!paramsQuery) return;

    let page = Number(searchParams.get('page'));

    if (totalPagesOfRequest) {
      page =
        Number(searchParams.get('page')) > totalPagesOfRequest
          ? totalPagesOfRequest
          : Number(searchParams.get('page'));
    }

    const query = searchParams.get('query');
    setQuery(query);

    setSearchParams({
      query,
      page,
    });

    const params = {
      query,
      page,
    };
    dispatch(setPage(page));
    dispatch(fetchMoviesByName(params));
  }, [
    dispatch,
    paramsQuery,
    searchParams,
    setSearchParams,
    totalPagesOfRequest,
  ]);

  const handlePageChange = page => {
    dispatch(setPage(page));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();

    if (!query) {
      alert('Введите запрос');
      return;
    }

    handlePageChange(1);
    setSearchParams({ query, page: 1 });
  };

  return (
    <StyledMoviesList ref={componentRef}>
      <StyledCatalogContainer>
        <SearchForm handleSubmit={handleSubmit} />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <StyledCatalogList>
              {weeklyTrendingMovies &&
                weeklyTrendingMovies.map(movie => (
                  <MoviesGalleryItem key={movie.id} movie={movie} />
                ))}
              {requestedMovies &&
                requestedMovies.map(movie => (
                  <MoviesGalleryItem key={movie.id} movie={movie} />
                ))}
            </StyledCatalogList>

            {!isLoading && totalPages > 1 && (
              <MyPagination
                totalPages={totalPages}
                onChangePage={handlePageChange}
                setSearchParams={setSearchParams}
                query={query}
              />
            )}
          </>
        )}
      </StyledCatalogContainer>
    </StyledMoviesList>
  );
};
