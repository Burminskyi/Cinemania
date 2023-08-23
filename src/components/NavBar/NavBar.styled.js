import { Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledNavbar = styled(Navbar)`
  background-color: var(--black);
`;

export const StyledNavbarBrand = styled(NavbarBrand)`
  font-size: 32px;
  margin-right: 60px;
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
