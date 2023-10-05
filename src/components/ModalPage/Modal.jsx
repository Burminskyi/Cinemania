import { useEffect } from 'react';

import {
  StyledCloseModalBtn,
  StyledModal,
  StyledModalOverlay,
} from './ModalPage.styled';

import { ModalFilmDetails } from './ModalFilmDetails';

export const Modal = ({ data, onClose }) => {
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
  const posterImage = data.poster_path
    ? `${imagePath}${data.poster_path}`
    : 'https://marketplace.canva.com/EAE9OZ4Eh9o/1/0/1131w/canva-black-minimalist-coming-soon-poster-rmN33IHdOEM.jpg';

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={onOverlayClick}>
      <StyledModal id="Modal">
        <StyledCloseModalBtn variant="white" onClick={onClose} />
        <ModalFilmDetails data={data} posterImage={posterImage} />
      </StyledModal>
    </StyledModalOverlay>
  );
};
