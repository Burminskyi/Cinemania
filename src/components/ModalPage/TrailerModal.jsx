import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  StyledTrailerFrame,
  StyledTrailerWrap,
} from './ModalPage.styled';

import { fetchTrailer } from 'redux/Movies/slice';

export const TrailerModal = ({ data } ) => {
  console.log('trailerID: ', data);
  const trailerURL = useSelector(state => state.movies.trailerURL);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('trailerID: ', data);
    dispatch(fetchTrailer(data));
  }, [dispatch, data]);

  return (
    <StyledTrailerWrap>
      <StyledTrailerFrame
        src={trailerURL}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></StyledTrailerFrame>
    </StyledTrailerWrap>
  );
};
