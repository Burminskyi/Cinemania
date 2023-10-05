import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  StyledCatalogContainer,
  StyledCatalogList,
} from 'components/WeeklyTrends/WeeklyTrendsStyled';

import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { LibraryNotification } from 'components/Notifications/LibraryNotification';

const { default: HomePageHero } = require('components/Hero/Hero');

const Library = ({ onChangePage }) => {
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

  useEffect(() => {
    onChangePage(1);
  }, [onChangePage]);

  return (
    <>
      <HomePageHero />
      <StyledCatalogContainer>
        {favoriteMovies.length ? (
          <StyledCatalogList>
            {favoriteMovies.map(movie => (
              <MoviesGalleryItem key={movie.id} movie={movie} />
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
