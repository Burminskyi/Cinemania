import { useEffect } from 'react';
import { StyledModal, StyledModalOverlay } from './ModalPage.styled';
import { ModalFilmDetails } from './ModalFilmDetails';
import { CloseButton } from 'react-bootstrap';

export const Modal = ({
  data,
  posterImage,
  onClose,
  addToLibrary,
  removeFromLibrary,
  favoriteMovies
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
