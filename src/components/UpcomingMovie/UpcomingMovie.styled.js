import { styled } from 'styled-components';

export const StyledUpcomingContainer = styled.div`
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

export const StyledUpcomingTitle = styled.h2`
  margin-bottom: 24px;
  margin-top: 32px;
  font-family: 'Roboto-500', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  @media (min-width: 768px) {
    margin-top: 44px;
    font-size: 24px;
    line-height: 1.16;
  }
  @media (min-width: 1280px) {
    margin-top: 60px;
    margin-bottom: 28px;
  }
`;

export const StyledUpcomingFilm = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 16px;
  }
`;

export const StyledUpcomingImage = styled.picture`
  display: block;
  width: 100%;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 704px;
    height: auto;
  }
`;

export const StyledUpcomingContentWrap = styled.div`
  max-width: 704px;
`;

export const StyledUpcomingName = styled.h3`
  margin-top: 24px;
  margin-bottom: 20px;
  font-family: 'Roboto-500', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.15;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 28px;
    line-height: 1.18;
  }
  @media (min-width: 1280px) {
    margin-top: 0;
    font-size: 32px;
    line-height: 1.19;
  }
`;

export const StyledUpcomingThumb = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin-left: 4px;
  }
  @media (min-width: 1280px) {
    display: block;
  }
`;

export const StyledUpcomingListLeft = styled.ul`
  @media (min-width: 768px) {
    width: 350px;
  }
`;
export const StyledUpcomingListItem = styled.li`
  display: flex;
  padding-bottom: 12px;

  font-family: 'Roboto-500', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`;
export const StyledUpcomingListText = styled.p`
  display: flex;
`;

export const StyledUpcomingContentTitle = styled.h3`
  margin-top: 20px;
  font-family: 'Roboto-500', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  align-items: center;
  text-transform: uppercase;
  @media (min-width: 768px) {
    margin-left: 4px;
  }
`;

export const StyledUpcomingContentText = styled.p`
  margin-top: 16px;
  font-family: 'Roboto-400', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  @media (min-width: 768px) {
    margin-left: 4px;
  }
`;

export const StyledUpcomingContentBtn = styled.button`
  display: block;
  margin-top: 20px;
  padding: 12px 24px;

  font-family: 'Roboto-500', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  border: 1px solid var(--brend-color);
  background: var(--gradient-1);
  border-radius: 74px;
  color: var(--black);
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: var(--orange);
    background: #fff;
    border: 1px solid var(--gradient-1);
  }
`;
