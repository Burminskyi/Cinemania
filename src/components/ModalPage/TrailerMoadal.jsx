import { useEffect } from 'react';
import {
  StyledModal,
  StyledModalOverlay,
  StyledTrailerFrame,
  StyledTrailerWrap,
} from './ModalPage.styled';
import { CloseButton } from 'react-bootstrap';

export const TrailerModal = ({ onClose, urlTrailer }) => {
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
        <StyledTrailerWrap>
          <StyledTrailerFrame
            src={urlTrailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></StyledTrailerFrame>
        </StyledTrailerWrap>
      </StyledModal>
    </StyledModalOverlay>
  );
};
