import { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import { agregarPeliculas } from "../services";
import Loader from "../components/Loader";

const NuevaPeliculaPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imageSrc, setImageSrc] = useState("");

  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const { error } = await agregarPeliculas(data);
    if (error) {
      setErrorMessage(error);
    }
    setIsLoading(false);
    setImageSrc("");
  };

  const imageChanged = (event) => setImageSrc(event.target.value);

  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmited}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el nombre"
          name="nombre"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="año">
        <Form.Label>Año</Form.Label>
        <Form.Control type="number" placeholder="Ingresa el año" name="año" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="director">
        <Form.Label>Director</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el id del director"
          name="director"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="img">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa la url de la imagen"
          name="img"
          onChange={imageChanged}
        />
      </Form.Group>

      {imageSrc !== "" && (
        <Image src={imageSrc} alt="Error, imagen no soportada." thumbnail />
      )}

      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingresa el precio"
          name="price"
        />
      </Form.Group>

      <label style={{ color: "red" }}>{errorMessage}</label>

      <Button variant="primary" type="submit">
        Guardar Pelicula
      </Button>
    </Form>
  );
};

export default NuevaPeliculaPage;
