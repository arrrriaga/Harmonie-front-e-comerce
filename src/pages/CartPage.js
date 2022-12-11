import { Col, Row } from "react-bootstrap";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";
import PaypalButtons from "../components/PaypalButtons";

const CartPage = () => {
  const { carrito } = useContext(PeliculaContext);
  console.log(carrito);
  const total = carrito.reduce(
    (acumulador, valor) => (acumulador = acumulador + valor.price),
    0
  );

  return !carrito.length ? (
    <h1>No hay películas, agrega una</h1>
  ) : (
    <Row>
      <Col>
        <ProductList peliculas={carrito} total={total} />
      </Col>
      <Col>
        <PaypalButtons peliculas={carrito} currency={"MXN"} amount={total} />
      </Col>
    </Row>
  );
};

export default CartPage;
