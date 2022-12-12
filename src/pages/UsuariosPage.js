import { useEffect, useState } from "react";
import { Image, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getAllUsers } from "../services";

const UsuariosPage = () => {
  const [users, setUsers] = useState([]);
  const inicializarUsuarios = async () => {
    const { detalles } = await getAllUsers();
    setUsers(detalles);
  };
  useEffect(() => {
    inicializarUsuarios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Completo</th>
          <th>Avatar</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Tipo</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {user.nombre} {user.apellido}
            </td>
            <td>
              <Image src={user.img} thumbnail style={{ width: "100px" }} />
            </td>
            <td>{user.correo}</td>
            <td>{user.edad}</td>
            <td>{user.tipo}</td>
            <td>
              <Link to={`/usuarios/${user._id}`}>Ver info</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UsuariosPage;
