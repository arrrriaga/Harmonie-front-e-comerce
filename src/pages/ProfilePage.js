import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { getUserInfo } from "../services/User";

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const getUserInfoOnInit = async () => {
    setLoading(true);
    const { detalles } = await getUserInfo(id);
    setUser(detalles);
    setLoading(false);
  };

  useEffect(() => {
    getUserInfoOnInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! Operador ternario
  return loading ? (
    <Loader />
  ) : (
    <Card style={{ width: "40rem" }}>
      <Card.Img variant="top" src={user?.img} style={{ height: "500px" }} />
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
