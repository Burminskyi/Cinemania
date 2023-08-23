import { Pagination } from 'react-bootstrap';
import { styled } from 'styled-components';

export const StyledPagination = styled(Pagination)`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const StyledPaginationItem = styled(Pagination.Item)`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;

    border: 1px solid #595959;
    border-radius: 50%;

    color: orange;
    &:hover {
      transform: scale(1.1) translateZ(0);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 20px var(--orange);
      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
      color: white;
    }
  }
  span {
    border-top-left-radius: none;
    border-bottom-left-radius: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;

    border: 1px solid #595959;
    border-radius: 50%;

    box-shadow: 0 0 20px var(--orange);
    background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
    color: white;
  }
`;

export const StyledPaginationNext = styled(Pagination.Next)`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    color: orange;
    &:hover {
      transform: scale(1.1) translateZ(0);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 20px var(--orange);
      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
      color: white;
    }
    &:focus {
      background-color: transparent;
      color: orange;
    }
  }
`;

export const StyledPaginationPrev = styled(Pagination.Prev)`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    color: orange;
    &:hover {
      transform: scale(1.1) translateZ(0);
      transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 0 20px var(--orange);
      background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
      color: white;
    }
    &:focus {
      background-color: transparent;
      color: orange;
    }
  }
`;
