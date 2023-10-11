import { Navbar, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import {
  StyledNavLink,
  StyledNavList,
  StyledNavbar,
  StyledNavbarBrand,
  StyledNavbarLogo,
  StyledSwitcherWrap,
  StyledThemeSwitcher,
} from './NavBar.styled';

import logo from './header-logo.svg';
import { useDispatch } from 'react-redux';
import { setThemeStyle } from 'redux/Theme/slice';

const NavBar = () => {
  const dispatch = useDispatch();
  const setTheme = () => dispatch(setThemeStyle());

  return (
    <StyledNavbar collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/">
          <StyledNavbarBrand>
            <StyledNavbarLogo alt="" src={logo} /> Cinemania
          </StyledNavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <StyledNavList className="me-auto">
            <StyledNavLink
              to="/"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'orange' : '',
                };
              }}
            >
              Home
            </StyledNavLink>
            <StyledNavLink
              to="/catalog"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'orange' : '',
                };
              }}
            >
              Catalog
            </StyledNavLink>
            <StyledNavLink
              to="/library"
              style={({ isActive }) => {
                return {
                  fontWeight: isActive ? '600' : '',
                  color: isActive ? 'orange' : '',
                };
              }}
            >
              My library
            </StyledNavLink>
          </StyledNavList>
          <StyledSwitcherWrap>
            <Form>
              <StyledThemeSwitcher
                onClick={setTheme}
                type="switch"
                id="custom-switch"
                label="Change theme"
              />
            </Form>
          </StyledSwitcherWrap>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default NavBar;
