import { Navbar, Nav, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './header-logo.svg';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand style={{ fontSize: '32px', marginRight: '60px' }}>
          <img
            alt=""
            src={logo}
            width="48"
            height="48"
            className="d-inline-block align-top"
            style={{ fontSize: '32px', marginRight: '60px' }}
          />{' '}
          Cinemania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/catalog">Catalog</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/library">My library</NavLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <Form>
              <Form.Check // prettier-ignore
                type="switch"
                id="custom-switch"
                label="Change theme"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
