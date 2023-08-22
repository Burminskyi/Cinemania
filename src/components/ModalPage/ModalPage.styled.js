import { StyledUpcomingContentBtn } from 'components/UpcomingMovie/UpcomingMovie.styled';
import { styled } from 'styled-components';

export const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex */
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  background-color: var(--black);
  box-shadow: 1px 1px 14px 4px rgba(255, 107, 8, 0.42);
  border-radius: 16px;
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledFilmDetailsContainer = styled.div`
  min-width: 280px;
  padding: 20px 16px;
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 704px;
    padding: 24px 18px;
  }
  @media (min-width: 768px) {
    width: 846px;
    padding: 30px 20px;
  }
`;

export const StyledFilmDetailsWrap = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 50px;
  }
  @media (min-width: 768px) {
  }
`;

export const StyledFilmDetailsImg = styled.img`
  width: 300px;
  height: 100%;
  @media (min-width: 768px) {
  }
  @media (min-width: 768px) {
  }
`;

export const StyledFilmDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
`;

export const StyledFilmDetailsListItem = styled.li`
  display: flex;
`;

export const StyledFilmDetailsSection = styled.div`
  width: 150px;
  color: var(--gray-light);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledFilmCaption = styled.p`
  height: 250px;
  display: inline-block;
  margin-top: 20px !important;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledModalBtn = styled(StyledUpcomingContentBtn)`
  margin: 0;
  width: 200px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledTrailerFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const StyledTrailerWrap = styled.div`
  width: 320px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  @media (min-width: 768px) {
    width: 640px;
    height: 360px;
    padding-bottom: 20px;
  }
`;
