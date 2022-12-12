import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { PeliculaContext } from "../context/PeliculaContext";

const ProductList = ({ peliculas, total }) => {
  const { eliminarDeCarrito } = useContext(PeliculaContext);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Pelicula</th>
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
          <td>${total.toFixed(2)}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ProductList;
