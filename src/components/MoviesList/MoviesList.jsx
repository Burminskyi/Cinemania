import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { StyledMoviesList } from './MoviesList.styled';
import { useEffect, useState } from 'react';
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
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query');
    setQuery(query);
    if (!query) return;

    const fetchMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        const data = await getMoviesByName(query, currentPage);
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
    currentPage,
    searchParams,
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
    <StyledMoviesList>
      <StyledCatalogContainer>
        <SearchForm handleSubmit={handleSubmit} />
        {isLoading || isTrendingMoviesLoading ? (
          <Loader />
        ) : (
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
        )}

        {totalPages > 1 && (
          <MyPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onChangePage={onChangePage}
            setSearchParams={setSearchParams}
            query={query}
          />
        )}
      </StyledCatalogContainer>
    </StyledMoviesList>
  );
};
