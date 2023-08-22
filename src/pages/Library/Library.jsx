import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';
import { useEffect } from 'react';

const {
  default: HomePageHero,
} = require('components/HomePageHero/HomePageHero');

const Library = ({
  favoriteMovies,
  addToLibrary,
  removeFromLibrary,
  onChangePage,
}) => {
  useEffect(() => {
    onChangePage(1);
  }, [onChangePage]);
  return (
    <>
      <HomePageHero
        addToLibrary={addToLibrary}
        removeFromLibrary={removeFromLibrary}
        favoriteMovies={favoriteMovies}
      />
      {favoriteMovies && (
        <StyledCatalogContainer>
          <StyledCatalogList>
            {favoriteMovies.map(movie => (
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
      )}
    </>
  );
};

export default Library;
