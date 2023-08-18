import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { StyledCatalogList } from 'components/WeeklyTrends/WeeklyTrendsStyled';

const {
  default: HomePageHero,
} = require('components/HomePageHero/HomePageHero');

const Library = ({ favoriteMovies, addToLibrary, removeFromLibrary }) => {
  console.log('favoriteMovies: ', favoriteMovies);
  return (
    <>
      <HomePageHero />
      {favoriteMovies && (
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
      )}
    </>
  );
};

export default Library;
