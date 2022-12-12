import { useEffect, useContext } from "react";
import { PeliculaContext } from "../../context/PeliculaContext";
import { verPeliculas } from "../../services";
import { Card, Button, Row } from "react-bootstrap";
import "./style.css";
const PeliculasPage = ({ columns }) => {
  const { peliculas, guardarPeliculas, agregarACarrito } =
    useContext(PeliculaContext);

  const getPeliculas = async () => {
    const { detalles } = await verPeliculas();
    guardarPeliculas(detalles);
  };

  useEffect(() => {
    getPeliculas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Row>
      {peliculas.map((pelicula, index) => (
        <Card
          style={{ margin: "15px" }}
          key={index}
          className={`col-${12 / columns}`}
        >
          {/* <div
            style={{
              width: "100%",
              height: "200px",
              backgroundImage: `url(${pelicula.img})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionX: '50%',
            }}
          />  */}

          <Card.Img className="imgCard" variant="top" src={pelicula.img} />
          <Card.Body>
            <Card.Title>{pelicula.nombre}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <h5>${pelicula.price}</h5>
            <Button
              onClick={() => {
                agregarACarrito({
                  nombre: pelicula.nombre,
                  price: pelicula.price,
                  _id: pelicula._id,
                });
              }}
            >
              Add to cart
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </Row>
  );
};

export default PeliculasPage;
