import { ImageGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { SearchForm } from 'components/SearchForm/SearchForm';
import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { StyledMoviesList } from './MoviesList.styled';

export const MoviesList = ({ weeklyTrendingMovies }) => {
  return (
    <StyledMoviesList>
      <StyledCatalogContainer>
        <SearchForm />
        <StyledCatalogList>
          {weeklyTrendingMovies.map(movie => (
            <ImageGalleryItem key={movie.id} movie={movie} />
          ))}
        </StyledCatalogList>
      </StyledCatalogContainer>
    </StyledMoviesList>
  );
};
