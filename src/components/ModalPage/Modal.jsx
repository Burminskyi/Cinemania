import { useEffect } from 'react';
import { StyledModal, StyledModalOverlay } from './ModalPage.styled';
import { ModalFilmDetails } from './ModalFilmDetails';
import { CloseButton } from 'react-bootstrap';

export const Modal = ({
  data,
  onClose,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies,
}) => {
  
  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  const imagePath = 'https://image.tmdb.org/t/p/original/';
  const posterImage = `${imagePath}${data.poster_path}`;

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={onOverlayClick}>
      <StyledModal>
        <CloseButton />
        <ModalFilmDetails
          data={data}
          posterImage={posterImage}
          addToLibrary={addToLibrary}
          removeFromLibrary={removeFromLibrary}
          favoriteMovies={favoriteMovies}
        />
      </StyledModal>
    </StyledModalOverlay>
  );
};
