import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchMoviesByName, setPage } from 'redux/Movies/slice';

import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { MyPagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { StyledMoviesList } from './MoviesList.styled';

export const MoviesList = () => {
  const totalPages = useSelector(state => state.movies.totalPages);
  const isLoading = useSelector(state => state.movies.isLoading);
  const requestedMovies = useSelector(state => state.movies.requestedMovies);
  const weeklyTrendingMovies = useSelector(
    state => state.movies.weeklyTrendingMovies
  );
  const [searchParams, setSearchParams] = useSearchParams();

  const componentRef = useRef(null);

  const [query, setQuery] = useState(null);

  const dispatch = useDispatch();

  const amountOfPages = totalPages < 500 ? totalPages : 500;

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    const page = searchParams.get('page');
    const query = searchParams.get('query');
    setQuery(query);

    if (page >= amountOfPages && query !== null) {
      setSearchParams({ query, page: amountOfPages });
    }
    if (page >= amountOfPages && query === null) {
      setSearchParams({ page: amountOfPages });
    }

    const params = {
      query,
      page,
    };
    dispatch(fetchMoviesByName(params));
  }, [amountOfPages, dispatch, query, searchParams, setSearchParams]);

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
              {requestedMovies && requestedMovies.length
                ? requestedMovies.map(movie => (
                    <MoviesGalleryItem key={movie.id} movie={movie} />
                  ))
                : weeklyTrendingMovies.map(movie => (
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
