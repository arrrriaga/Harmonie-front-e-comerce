import { Col, Row } from "react-bootstrap";
import PaypalButtons from "../components/PaypalButtons";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";

const CartPage = () => {
  const { carrito } = useContext(PeliculaContext);
  /* const total = peliculas
    .map((pelicula) => pelicula.price)
    .reduce((valorActual, siguienteValor) => {
      return valorActual + siguienteValor;
    }, 0); */
  const total = carrito.reduce((valorActual, siguienteValor) => {
    return (
      (typeof valorActual === "number" ? valorActual : valorActual.price) +
      siguienteValor.price
    );
  }, 0);
  return !carrito.length ? (
    <h1>No hay películas, agrega una.</h1>
  ) : (
    <Row>
      <Col>
        <ProductList peliculas={carrito} total={total} />
      </Col>
      <Col>
        <PaypalButtons peliculas={carrito} currency="USD" amount={total} />
      </Col>
    </Row>
  );
};

export default CartPage;
