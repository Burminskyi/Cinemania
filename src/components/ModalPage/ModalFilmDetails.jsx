import { useDispatch, useSelector } from 'react-redux';

import {
  StyledDetailsText,
  StyledFilmCaption,
  StyledFilmDetailsContainer,
  StyledFilmDetailsImg,
  StyledFilmDetailsList,
  StyledFilmDetailsListItem,
  StyledFilmDetailsSection,
  StyledFilmDetailsWrap,
  StyledModalBtn,
} from './ModalPage.styled';

import {
  removeFromFavoriteMovies,
  setFavoriteMovies,
} from 'redux/Movies/slice';

export const ModalFilmDetails = ({ data }) => {
  const favoriteMovies = useSelector(state => state.movies.favoriteMovies);

  const dispatch = useDispatch();

  const addToLibrary = data => {
    dispatch(setFavoriteMovies(data));
  };

  const removeFromLibrary = id => {
    dispatch(removeFromFavoriteMovies(id));
  };

  const handleClick = e => {
    e.preventDefault();
    addToLibrary(data);
  };

  const handleDelete = e => {
    e.preventDefault();
    removeFromLibrary(data.id);
  };

  const isInLibrary =
    favoriteMovies &&
    favoriteMovies.some(favoriteMovie => favoriteMovie.id === data.id);
  
  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const posterImage = data.poster_path
    ? `${imagePath}${data.poster_path}`
    : 'https://marketplace.canva.com/EAE9OZ4Eh9o/1/0/1131w/canva-black-minimalist-coming-soon-poster-rmN33IHdOEM.jpg';


  return (
    <StyledFilmDetailsContainer>
      <StyledFilmDetailsWrap>
        <StyledFilmDetailsImg src={posterImage} alt={data.original_title} />
        <div>
          <StyledFilmDetailsList>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Vote / Votes</StyledFilmDetailsSection>
              <StyledDetailsText>
                {data.vote_average} / {data.vote_count}
              </StyledDetailsText>
            </StyledFilmDetailsListItem>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Popularity</StyledFilmDetailsSection>
              <StyledDetailsText>
                {Math.round(data.popularity)}
              </StyledDetailsText>
            </StyledFilmDetailsListItem>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Genre</StyledFilmDetailsSection>
              <StyledDetailsText>Comedy, Adventure, Fantasy</StyledDetailsText>
            </StyledFilmDetailsListItem>
          </StyledFilmDetailsList>
          <StyledFilmDetailsSection>ABOUT</StyledFilmDetailsSection>
          <StyledFilmCaption>{data.overview}</StyledFilmCaption>
          {isInLibrary ? (
            <StyledModalBtn type="button" onClick={handleDelete}>
              Remove from library
            </StyledModalBtn>
          ) : (
            <StyledModalBtn type="button" onClick={handleClick}>
              Add to my library
            </StyledModalBtn>
          )}
        </div>
      </StyledFilmDetailsWrap>
    </StyledFilmDetailsContainer>
  );
};
