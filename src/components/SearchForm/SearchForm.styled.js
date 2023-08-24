import { styled } from 'styled-components';

export const StyledSearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    margin-bottom: 36px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 48px;
  }
`;

export const StyledSearchFormInput = styled.input`
  padding-left: 20px;
  width: 224px;
  height: 40px;
  border: 1px solid orange;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  &::placeholder {
    font-family: 'Roboto-500', sans-serif;

    font-weight: 500;
    font-size: 14px;
    line-height: calc(16 / 14);

    color: #b7b7b7;
  }
  @media (min-width: 768px) {
    width: 204px;
  }
  @media (min-width: 1280px) {
    width: 334px;
    padding-left: 24px;
    &::placeholder {
      font-size: 16px;
      line-height: calc(19 / 16);
    }
  }
`;

export const StyledSearchFormBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background: linear-gradient(141.22deg, #ffc226 9.4%, #f84119 91.91%);
  border-radius: 50%;
  border: none;
  &:hover {
    border: 1px solid #f84119;
    background: transparent;
    fill: #ffc226;
  }
`;
