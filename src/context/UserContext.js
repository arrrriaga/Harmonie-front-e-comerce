import { useState, createContext } from "react";

// ! 1.- Crear el contexto para el usuario
const UserContext = createContext();

//! 2.- Vamos a obtener al Provider del UserContext
const { Provider } = UserContext;

//! 3.- Crear componente
const UserProvider = ({ children }) => {
  //! 4.- Creamos nuestro estado global
  const initialState = {
    token: null,
  };
  const [user, setUser] = useState(initialState);

  //! 5.- Manejar el estado
  const guardarToken = (newToken) => {
    setUser({
      ...user,
      token: newToken,
    });
    localStorage.setItem("token", newToken);
  };

  const borrarInfoUser = () => {
    setUser(initialState);
    localStorage.clear();
  };

  //! 6.- Retornamos el componente
  return (
    <Provider
      value={{
        user,
        guardarToken,
        borrarInfoUser,
      }}
    >
      {children}
    </Provider>
  );
};

//! 7.- Exportamos provider & context
export { UserProvider, UserContext };
