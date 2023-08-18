import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { StyledMoviesList } from './MoviesList.styled';

export const MoviesList = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies
}) => {
  return (
    <StyledMoviesList>
      <StyledCatalogContainer>
        <SearchForm />
        <StyledCatalogList>
          {weeklyTrendingMovies.map(movie => (
            <MoviesGalleryItem
              key={movie.id}
              movie={movie}
              addToLibrary={addToLibrary}
              removeFromLibrary={removeFromLibrary}
              favoriteMovies={favoriteMovies}
            />
          ))}
        </StyledCatalogList>
      </StyledCatalogContainer>
    </StyledMoviesList>
  );
};
