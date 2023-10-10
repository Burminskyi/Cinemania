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
import { Loader } from 'components/Loader/Loader';

import { fetchTrendingMoviesOfTheDay } from 'redux/Movies/slice';
import { selectLoadingStatus, selectTrendingMovie } from 'redux/selectors';

const Hero = () => {
  const isLoading = useSelector(selectLoadingStatus);
  const trendingMovie = useSelector(selectTrendingMovie);

  const [modalProps, setModalProps] = useState(null);
  

  const dispatch = useDispatch();

  useEffect(() => {
    if (trendingMovie) return;
      setModalProps(null);
    dispatch(fetchTrendingMoviesOfTheDay());
  }, [dispatch, trendingMovie]);

  const onModalClose = () => {
    setModalProps(null);
  };

  const onInfoModal = () => {
    setModalProps('Info');
  };

  const onTrailerModal = () => {
    setModalProps('Trailer');
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
                <StyledHeroBtn type="button" onClick={onInfoModal}>
                  More details
                </StyledHeroBtn>
              </StyledHeroBtnWrap>
            </StyledHeroInfoWrap>
          </StyledHeroContainer>
          {modalProps === 'Info' && (
            <Modal data={trendingMovie} onClose={onModalClose} />
          )}
          {modalProps === 'Trailer' && (
            <Modal data={trendingMovie.id} onClose={onModalClose} />
          )}
        </>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
