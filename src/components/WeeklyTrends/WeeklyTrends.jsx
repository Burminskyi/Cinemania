import { MoviesGalleryItem } from 'components/MoviesGalleryItem/MoviesGalleryItem';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  StyledCatalogContainer,
  StyledCatalogList,
  StyledWeeklyTrendsHeader,
} from './WeeklyTrendsStyled';
import { Loader } from 'components/Loader/Loader';

const WeeklyTrends = ({
  weeklyTrendingMovies,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [slicedWeeklyTrendingMovies, setweeklyTrendingMovies] = useState([]);

  useEffect(() => {
    const updateComponent = async () => {
      setIsLoading(true);
      try {
        const slicedData = weeklyTrendingMovies.slice(0, 3);
        setweeklyTrendingMovies(slicedData);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    updateComponent();
  }, [weeklyTrendingMovies]);

  return (
    <section>
      <StyledCatalogContainer>
        <StyledWeeklyTrendsHeader>
          <h3>Weekly Trends</h3>
          <Link to="/catalog">See All</Link>
        </StyledWeeklyTrendsHeader>
        {isLoading ? (
          <Loader />
        ) : (
          <StyledCatalogList>
            {slicedWeeklyTrendingMovies.map(movie => (
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
      </StyledCatalogContainer>
    </section>
  );
};

export default WeeklyTrends;
