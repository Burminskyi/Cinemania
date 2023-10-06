import { useEffect } from 'react';

import {
  StyledCloseModalBtn,
  StyledModal,
  StyledModalOverlay,
} from './ModalPage.styled';

import { ModalFilmDetails } from './ModalFilmDetails';
import { TrailerModal } from './TrailerModal';

export const Modal = ({ data, onClose }) => {
  console.log('data: ', data);

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
      <StyledModal id="Modal">
        <StyledCloseModalBtn variant="white" onClick={onClose} />
        {typeof data === 'object' && <ModalFilmDetails data={data} />}
        {typeof data === 'number' && <TrailerModal data={data} />}
      </StyledModal>
    </StyledModalOverlay>
  );
};
