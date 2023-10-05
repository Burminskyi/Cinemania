import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledCloseModalBtn,
  StyledModal,
  StyledModalOverlay,
  StyledTrailerFrame,
  StyledTrailerWrap,
} from './ModalPage.styled';

import { fetchTrailer } from 'redux/Movies/slice';

export const TrailerModal = ({ onClose, trailerID }) => {
  const trailerURL = useSelector(state => state.movies.trailerURL);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrailer(trailerID));

    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDown);

    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [dispatch, onClose, trailerID]);

  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <StyledModalOverlay onClick={onOverlayClick}>
      <StyledModal id="Modal">
        <StyledCloseModalBtn variant="white" onClick={onClose} />
        <StyledTrailerWrap>
          <StyledTrailerFrame
            src={trailerURL}
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
