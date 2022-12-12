import { useContext } from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services";
import Loader from "../components/Loader";
import { UserContext } from "../context/UserContext";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { guardarInfo } = useContext(UserContext);

  const onSubmited = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const {
      detalles: { token, tipo },
      error,
    } = await login(data);
    if (error) {
      //alert(error);
      setErrorMessage(error);
    } else {
      guardarInfo(token, tipo);
      event.target.reset();
    }
    setIsLoading(false);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <Form onSubmit={onSubmited}>
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingresa tu correo"
          name="correo"
        />
        <label style={{ color: "red" }}>{errorMessage}</label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          name="password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
};

export default LoginPage;
