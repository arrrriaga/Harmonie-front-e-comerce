import { Col, Row } from "react-bootstrap";
import ProductList from "../components/ProductList";
import { useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";
import { PayPalButtons } from "@paypal/react-paypal-js";

const CartPage = () => {
  const { carrito } = useContext(PeliculaContext);
  console.log(carrito);
  const total = carrito.reduce(
    (acumulador, valor) => (acumulador = acumulador + valor.price),
    0
  );
  return (
    <Row>
      <Col>
        <ProductList peliculas={carrito} total={total} />
      </Col>
      <Col>
        <PayPalButtons total={total} />
      </Col>
    </Row>
  );
};

export default CartPage;
