import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/getMovies';
import { StyledHeroBtn, StyledHeroBtnWrap, StyledHeroContainer, StyledHeroInfoWrap, StyledHeroRating, StyledHeroSection } from './HomePageHero.styled';
import { StyledUpcomingContentBtn } from 'components/UpcomingMovie/UpcomingMovie.styled';
import HeroRating from 'components/Rating/HeroRating';

const HomePageHero = () => {
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const [trendingMovie, setTrendingMovie] = useState(null);

  useEffect(() => {
    const updateComponent = async () => {
      try {
        const data = await getTrendingMovies();
        const movies = data.results;

        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        console.log('randomMovie: ', randomMovie);

        setTrendingMovie(randomMovie);
      } catch (error) {
        console.log(error.message);
      }
    };
    updateComponent();
  }, []);

  return (
    <StyledHeroSection>
      {trendingMovie && (
        <StyledHeroContainer>
          <img
            src={imagePath + trendingMovie.backdrop_path}
            alt={trendingMovie.original_title}
            style={{ zIndex: '-1', position: 'relative' }}
          />
          
            <StyledHeroInfoWrap>
              <h3>{trendingMovie ? trendingMovie.original_title : 'Coming soon'}</h3>
              <HeroRating rating={trendingMovie.vote_average} />
              <p>{trendingMovie.overview}</p>
              <StyledHeroBtnWrap>
                <StyledHeroBtn type="button">Watch trailer</StyledHeroBtn>
                <StyledHeroBtn type="button">More details</StyledHeroBtn>
              </StyledHeroBtnWrap>
            </StyledHeroInfoWrap>
          </StyledHeroContainer>
      )}
    </StyledHeroSection>
  );
};

export default HomePageHero;
