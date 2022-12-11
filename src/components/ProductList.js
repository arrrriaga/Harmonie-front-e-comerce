import { Table } from "react-bootstrap";

const ProductList = ({ peliculas, total }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Película</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {peliculas.map((pelicula, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{pelicula.nombre}</td>
            <td>${pelicula.price.toFixed(2)}</td>
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
