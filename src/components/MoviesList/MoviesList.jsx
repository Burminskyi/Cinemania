import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { StyledMoviesList } from './MoviesList.styled';
import { useEffect, useRef, useState } from 'react';
import { getMoviesByName } from 'services/getMovies';
import { useSearchParams } from 'react-router-dom';
import { MyPagination } from 'components/Pagination/Pagination';
import { Loader } from 'components/Loader/Loader';

export const MoviesList = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
  totalPages,
  currentPage,
  onChangePage,
  setTotalMoviesByNamePagesAmount,
  isTrendingMoviesLoading,
}) => {
  const amountOfPages = totalPages < 500 ? totalPages : 500;
  const componentRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (componentRef.current) {
      componentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    // window.scrollTo({ top: 800, behavior: 'smooth' });

    const query = searchParams.get('query');
    setQuery(query);
    const page = searchParams.get('page');
    if (page >= amountOfPages && query !== null) {
      setSearchParams({ query, page: amountOfPages });
      onChangePage(amountOfPages);
    }
    if (page >= amountOfPages && query === null) {
      setSearchParams({ page: amountOfPages });
      onChangePage(amountOfPages);
    }
    if (page) {
      onChangePage(page);
    }

    const fetchMoviesByQuery = async () => {
      try {
        setIsLoading(true);

        if (!query) return;
        const data = await getMoviesByName(query, page ? page : 1);
        setTotalMoviesByNamePagesAmount(data.total_pages);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMoviesByQuery();
  }, [
    amountOfPages,
    currentPage,
    onChangePage,
    query,
    searchParams,
    setSearchParams,
    setTotalMoviesByNamePagesAmount,
  ]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();

    if (!query) {
      alert('Введите запрос');
      return;
    }

    onChangePage(1);
    setSearchParams({ query, page: 1 });
  };

  return (
    <StyledMoviesList ref={componentRef}>
      <StyledCatalogContainer>
        <SearchForm handleSubmit={handleSubmit} />
        {isLoading || isTrendingMoviesLoading ? (
          <Loader />
        ) : (
          <>
            <StyledCatalogList>
              {movies.length
                ? movies.map(movie => (
                    <MoviesGalleryItem
                      key={movie.id}
                      movie={movie}
                      addToLibrary={addToLibrary}
                      removeFromLibrary={removeFromLibrary}
                      favoriteMovies={favoriteMovies}
                    />
                  ))
                : weeklyTrendingMovies.map(movie => (
                    <MoviesGalleryItem
                      key={movie.id}
                      movie={movie}
                      addToLibrary={addToLibrary}
                      removeFromLibrary={removeFromLibrary}
                      favoriteMovies={favoriteMovies}
                    />
                  ))}
            </StyledCatalogList>

            {!isLoading && totalPages > 1 && (
              <MyPagination
                totalPages={totalPages}
                currentPage={currentPage}
                onChangePage={onChangePage}
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
