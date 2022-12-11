import React from "react";
import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PeliculaContext } from "../context/PeliculaContext";
import { UserContext } from "../context/UserContext";

const NavComponent = () => {
  const {
    user: { token },
  } = useContext(UserContext);

  const { carrito } = useContext(PeliculaContext);
  const publicRoutes = [
    <Nav.Link as={Link} to="/login" key={0}>
      Login
    </Nav.Link>,
    <Nav.Link as={Link} to="/registro" key={1}>
      Registro
    </Nav.Link>,
  ];

  const privRoutes = [
    <Nav.Link as={Link} to="/profile" key={0}>
      Mi perfil
    </Nav.Link>,
    <Nav.Link as={Link} to="/about" key={1}>
      About
    </Nav.Link>,
    <Nav.Link as={Link} to="/cart" key={2}>
      Carrito {!carrito.length ? "" : `(${carrito.length})`}
    </Nav.Link>,
    <Nav.Link as={Link} to="/logout" key={3}>
      Cerrar sesión
    </Nav.Link>,
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {token ? privRoutes : publicRoutes}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
