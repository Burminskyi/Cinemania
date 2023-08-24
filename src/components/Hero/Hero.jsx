import { useEffect, useState } from 'react';
import { getTrailer, getTrendingMovies } from 'services/getMovies';
import {
  StyledHeroBtn,
  StyledHeroBtnWrap,
  StyledHeroContainer,
  StyledHeroInfoWrap,
  StyledHeroSection,
  StyledHeroTitle,
  StyledMovieCaption,
} from './Hero.styled';
import HeroRating from 'components/Rating/HeroRating';
import { Modal } from 'components/ModalPage/Modal';
import { TrailerModal } from 'components/ModalPage/TrailerMoadal';
import { Loader } from 'components/Loader/Loader';

const Hero = ({ addToLibrary, removeFromLibrary, favoriteMovies }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailerModal, setShowTrailerModal] = useState(false);
  const [trendingMovie, setTrendingMovie] = useState(null);

  useEffect(() => {
    const updateComponent = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingMovies();
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];
        setTrendingMovie(randomMovie);

        const trailerData = await getTrailer(randomMovie.id);
        const filmTrailerArr = trailerData.results;
        const trailer = filmTrailerArr.find(e => e.name === 'Official Trailer');
        const { key } = trailer;
        if (!key || filmTrailerArr.length === 0) throw new Error('No data!');
        setTrailerKey(key);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    updateComponent();
  }, []);

  const onModal = () => {
    setShowModal(prev => !prev);
  };
  const onTrailerModal = () => {
    setShowTrailerModal(prev => !prev);
  };

  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const urlTrailer = `https://www.youtube.com/embed/${trailerKey}`;

  return (
    <StyledHeroSection>
      {isLoading && <Loader />}
      {trendingMovie && (
        <>
          <img
            src={`${imagePath}${trendingMovie.backdrop_path}`}
            alt={trendingMovie.original_title}
            style={{ zIndex: '-1', position: 'relative' }}
          />
          <StyledHeroContainer>
            <StyledHeroInfoWrap>
              <StyledHeroTitle>
                {trendingMovie.original_title
                  ? trendingMovie.original_title
                  : 'Coming soon'}
              </StyledHeroTitle>
              <HeroRating rating={trendingMovie.vote_average} />
              <StyledMovieCaption>{trendingMovie.overview}</StyledMovieCaption>
              <StyledHeroBtnWrap>
                <StyledHeroBtn type="button" onClick={onTrailerModal}>
                  Watch trailer
                </StyledHeroBtn>
                <StyledHeroBtn type="button" onClick={onModal}>
                  More details
                </StyledHeroBtn>
              </StyledHeroBtnWrap>
            </StyledHeroInfoWrap>
          </StyledHeroContainer>
          {showModal && (
            <Modal
              data={trendingMovie}
              onClose={onModal}
              addToLibrary={addToLibrary}
              removeFromLibrary={removeFromLibrary}
              favoriteMovies={favoriteMovies}
            />
          )}
          {showTrailerModal && (
            <TrailerModal onClose={onTrailerModal} urlTrailer={urlTrailer} />
          )}
        </>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
