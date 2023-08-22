import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { LibraryNotification } from 'components/Notifications/LibraryNotification';
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
      <StyledCatalogContainer>
        {favoriteMovies.length ? (
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
        ) : (
          <LibraryNotification />
        )}
      </StyledCatalogContainer>
    </>
  );
};

export default Library;
