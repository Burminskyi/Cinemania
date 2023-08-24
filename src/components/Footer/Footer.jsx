import { StyledFooterWrap, StyledLink } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooterWrap>
      <p>
        Created by{' '}
        <StyledLink href="https://www.linkedin.com/in/anton-burminskyi/">
          Anton Burminskyi
        </StyledLink>{' '}
        2023
      </p>
    </StyledFooterWrap>
  );
};
