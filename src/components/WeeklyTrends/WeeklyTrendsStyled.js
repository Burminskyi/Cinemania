import { styled } from 'styled-components';

export const StyledCatalogList = styled.ul`
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 0;
  list-style-type: none;
  @media (min-width: 768px) {
    row-gap: 28px;
  }
  @media (min-width: 1280px) {
    row-gap: 28px;
  }
`;

export const StyledCatalogContainer = styled.div`
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

export const StyledWeeklyTrendsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
`;
