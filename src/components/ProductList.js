import { Button, Table } from "react-bootstrap";
import { useContext } from "react";
import { PeliculaContext } from "../context/PeliculaContext";

const ProductList = ({ peliculas, total }) => {
  const { eliminarDeCarrito } = useContext(PeliculaContext);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Película</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {peliculas.map((pelicula, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{pelicula.nombre}</td>
            <td>${pelicula.price.toFixed(2)}</td>
            <td>
              <Button variant="danger" onClick={() => eliminarDeCarrito(index)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
        <tr>
          <th colSpan={2}>Total</th>
          <td>
            <b>${total.toFixed(2)}</b>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductList;
