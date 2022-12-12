import { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { getMisPeliculas } from "../services";

const MisPeliculasPage = () => {
  const [peliculas, setPeliculas] = useState([]);
  const inicializarPeliculas = async () => {
    const { detalles } = await getMisPeliculas();
    setPeliculas(detalles);
  };
  useEffect(() => {
    inicializarPeliculas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Poster</th>
          <th>Año</th>
          <th>Director</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {peliculas.map((pelicula, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{pelicula.nombre}</td>
            <td>
              <Image src={pelicula.img} thumbnail style={{ width: "100px" }} />
            </td>
            <td>{pelicula.año}</td>
            <td>{pelicula.director}</td>
            <td>${pelicula.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MisPeliculasPage;
