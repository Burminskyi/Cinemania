import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
import { TrailerModal } from 'components/ModalPage/TrailerModal';
import { Loader } from 'components/Loader/Loader';

import { fetchTrendingMoviesOfTheDay } from 'redux/Movies/slice';

const Hero = () => {
  const isLoading = useSelector(state => state.movies.isLoading);
  const trendingMovie = useSelector(state => state.movies.trendingMovie);

  const [showModal, setShowModal] = useState(false);
  const [showTrailerModal, setShowTrailerModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendingMoviesOfTheDay());
  }, [dispatch]);

  const onModal = () => {
    setShowModal(prev => !prev);
  };
  const onTrailerModal = () => {
    setShowTrailerModal(prev => !prev);
  };

  const imagePath = 'https://image.tmdb.org/t/p/original/';

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
          {showModal && <Modal data={trendingMovie} onClose={onModal} />}
          {showTrailerModal && (
            <TrailerModal
              onClose={onTrailerModal}
              trailerID={trendingMovie.id}
            />
          )}
        </>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
