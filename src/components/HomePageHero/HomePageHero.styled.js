import { StyledUpcomingContentBtn } from 'components/UpcomingMovie/UpcomingMovie.styled';
import { styled } from 'styled-components';

export const StyledHeroSection = styled.section`
  position: relative;
  background-image: linear-gradient(
    86.77deg,
    #111 30.38%,
    rgba(17, 17, 17, 0) 65.61%
  );
`;

export const StyledHeroContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  @media (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const StyledHeroInfoWrap = styled.div`
  width: 280px;
  position: absolute;
  bottom: 30px;
  font-size: 12px;
  @media (min-width: 768px) {
    width: 400px;
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const StyledHeroBtnWrap = styled.div`
    width: inherit;
    display: flex;
    justify-content: space-between;
`;

export const StyledHeroBtn = styled(StyledUpcomingContentBtn)`
  width: 130px;
  font-size: 14px;
  @media (min-width: 768px) {
    width: 180px;
    font-size: 16px;
  }
`;

