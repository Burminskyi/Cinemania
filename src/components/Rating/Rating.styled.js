import { styled } from 'styled-components';

export const StyledRatingBody = styled.div`
  width: max-content;
  position: absolute;
  bottom: 14.87px;
  right: 16.87px;
  color: #b7b7b7;

  &:before {
    content: "☆""☆""☆""☆""☆";
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

export const StyledHeroRatingBody = styled.div`
  width: max-content;
  position: relative;
  color: #b7b7b7;
  font-size: 16px;

  &:before {
    content: '☆' '☆' '☆' '☆' '☆';
    color: #f89f19;
    display: block;
  }
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 28px;
  }
`;

export const StyledRatingActive = styled.div`
  position: absolute;
  width: 85%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  &:before {
    content: '★★★★★';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #f89f19;
  }
`;

export const StyledRatingItems = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

export const StyledRatingItem = styled.input`
  flex: 0 0 20%;
  height: 100%;
  opacity: 0;
`;
