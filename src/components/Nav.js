import { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PeliculaContext } from "../context/PeliculaContext";
import { UserContext } from "../context/UserContext";

const NavComponent = () => {
  const {
    user: { token, tipo },
  } = useContext(UserContext);

  const { carrito } = useContext(PeliculaContext);

  const clientRoutes = [
    { path: "/", titulo: "Home" },
    { path: "/about", titulo: "Acerca de..." },
    {
      path: "/cart",
      titulo: `Carrito ${!carrito.length ? "" : carrito.length}`,
    },
  ];

  const adminRoutes = [
    { path: "/", titulo: "Dashboard" },
    { path: "/nueva-pelicula", titulo: "Nueva Pelicula" },
    { path: "/mis-peliculas", titulo: "Mis Películas" },
    { path: "/usuarios", titulo: "Usuarios" },
  ];

  const loginRoutes = tipo === "cliente" ? clientRoutes : adminRoutes;

  const privateRoutes = [
    ...loginRoutes,
    { path: "/profile", titulo: "Mi perfil" },
    { path: "/logout", titulo: "Cerrar sesión" },
  ];

  const publicRoutes = [
    { path: "/", titulo: "Inicio" },
    { path: "/login", titulo: "Iniciar sesión" },
    { path: "/registro", titulo: "Registrarse" },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {(token ? privateRoutes : publicRoutes).map((route, index) => (
              <Nav.Link as={Link} to={route.path} key={index}>
                {route.titulo}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
