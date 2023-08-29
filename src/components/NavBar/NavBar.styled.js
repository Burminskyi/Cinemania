import { FormCheck, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavbar = styled(Navbar)`
  /* background-color: var(--black); */
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  color: inherit;
  font-size: 32px;
  margin-right: 60px;
  &:hover {
    color: inherit;
  }
`;

export const StyledNavbarLogo = styled.img`
  display: inline-block;
  vertical-align: top;
  font-size: 32px;
  margin-right: 10px;
`;

export const StyledNavList = styled(Nav)`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  &:hover {
    color: orange;
  }
`;

export const StyledThemeSwitcher = styled(FormCheck)`
  .form-check-input {
    &:checked {
      background-color: orange;
      border-color: orange;
    }
    &:focus {
      border-color: orange;
      box-shadow: 0 0 0 0.25rem rgba(255, 165, 0, 0.25);
      background-image: var(--bs-form-switch-bg);
    }
  }
`;

export const StyledSwitcherWrap = styled(Nav)`
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;


