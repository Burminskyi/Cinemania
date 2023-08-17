import { StyledFooterText, StyledFooterWrap, StyledLink } from './Footer.styled';

export const Footer = () => {
  return (
    <StyledFooterWrap>
      <StyledFooterText>
        Created by{' '}
        <StyledLink href="https://www.linkedin.com/in/anton-burminskyi/">
          Anton Burminskyi
        </StyledLink>{' '}
        2023
      </StyledFooterText>
    </StyledFooterWrap>
  );
};
