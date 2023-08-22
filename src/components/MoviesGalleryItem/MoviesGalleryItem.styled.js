import Rating from 'components/Rating/Rating';
import { styled } from 'styled-components';

export const StyledCatalogItem = styled.li`
  position: relative;
  width: 280px;
  height: 406px;
  &:hover {
    transform: scale(1.02) translateZ(0);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 20px var(--orange);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    width: 224px;
    height: 325px;
  }
  @media (min-width: 1280px) {
    width: 394px;
    height: 574px;
  }
`;

export const StyledPhotoCard = styled.div`
  height: inherit;
`;

export const StyledImageWrap = styled.div`
  width: 100%;
  height: 100%;
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 63.48%,
      rgba(0, 0, 0, 0.9) 92.16%
    );
  }
`;

export const StyledPhotoCardImage = styled.img`
  height: inherit;
  width: 100%;
  object-fit: cover;
  background-repeat: no-repeat;
`;

export const StyledFilmInfo = styled.div`
  max-width: 65%;
  position: absolute;
  left: 12px;
  bottom: 12px;
  font-family: 'Roboto-500', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: calc(20 / 12);
  color: #ffffff;

  @media (min-width: 768px) {
    line-height: calc(18 / 12);
  }
  @media (min-width: 1280px) {
    bottom: 20px;
    left: 20px;
    font-size: 20px;
    line-height: calc(23 / 20);
  }
`;

export const StyledFilmInfoWrap = styled.div`
  display: flex;
  align-items: end;
  gap: 5px;
  color: #b7b7b7;
`;
export const StyledJenresList = styled.p`
  width: fit-content;
`;

export const StyledCatalogRating = styled(Rating)`
  width: max-content;
  position: absolute;
  bottom: 14.87px;
  right: 16.87px;
  color: #b7b7b7;

  &:before {
    content: '★' '★' '★' '★' '★';
    color: #f89f19;
    display: block;
  }
  @media (min-width: 768px) {
    font-size: 10px;
    right: 9.87px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    right: 15.87px;
    bottom: 20px;
  }
`;
