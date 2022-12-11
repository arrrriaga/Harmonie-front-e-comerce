import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";
import { getUserInfo } from "../services/Usuarios";
import Loader from "../components/Loader/index";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [Loading, setLoading] = useState(true);

  const getMyInfo = async () => {
    setLoading(true);
    const { detalles } = await getUserInfo();
    setUser(detalles);
    setLoading(false);
  };

  useEffect(() => {
    getMyInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Loading ? (
    <Loader />
  ) : (
    <Card style={{ height: "20rem", width: "20rem" }}>
      <Card.Img variant="top" src={user?.img} />
      <Card.Body>
        <Card.Title>
          {user?.nombre} {user?.apellido}
        </Card.Title>
        <Card.Text>
          Tipo de usuario: {user?.tipo}
          <br />
          Edad: {user?.edad}
          <br />
          Correo: {user?.correo}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default ProfilePage;
