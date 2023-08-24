import { styled } from 'styled-components';

export const StyledFooterWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
`;

export const StyledLink = styled.a`
  display: inline-block;
  color: #f87719;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;
