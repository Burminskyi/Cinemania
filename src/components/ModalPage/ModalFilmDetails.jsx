import {
  StyledFilmCaption,
  StyledFilmDetailsContainer,
  StyledFilmDetailsImg,
  StyledFilmDetailsList,
  StyledFilmDetailsListItem,
  StyledFilmDetailsSection,
  StyledFilmDetailsWrap,
  StyledModalBtn,
} from './ModalPage.styled';

export const ModalFilmDetails = ({
  data,
  posterImage,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
}) => {
  const handleClick = () => {
    addToLibrary(data);
  };

  const handleDelete = () => {
    removeFromLibrary(data.id);
  };

  const isInContacts = favoriteMovies && favoriteMovies.some(
    favoriteMovie => favoriteMovie.id === data.id
  );

  return (
    <StyledFilmDetailsContainer>
      <StyledFilmDetailsWrap>
        <StyledFilmDetailsImg src={posterImage} alt={data.original_title} />
        <div>
          <StyledFilmDetailsList>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Vote / Votes</StyledFilmDetailsSection>
              <div>
                {data.vote_average} / {data.vote_count}
              </div>
            </StyledFilmDetailsListItem>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Popularity</StyledFilmDetailsSection>
              <div>{Math.round(data.popularity)}</div>
            </StyledFilmDetailsListItem>
            <StyledFilmDetailsListItem>
              <StyledFilmDetailsSection>Genre</StyledFilmDetailsSection>
              <div>Comedy, Adventure, Fantasy</div>
            </StyledFilmDetailsListItem>
          </StyledFilmDetailsList>
          <StyledFilmDetailsSection>ABOUT</StyledFilmDetailsSection>
          <StyledFilmCaption>{data.overview}</StyledFilmCaption>
          {isInContacts ? (
            <StyledModalBtn onClick={handleDelete}>
              Remove from library
            </StyledModalBtn>
          ) : (
            <StyledModalBtn onClick={handleClick}>
              Add to my library
            </StyledModalBtn>
          )}
        </div>
      </StyledFilmDetailsWrap>
    </StyledFilmDetailsContainer>
  );
};
