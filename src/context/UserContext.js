import { useState, createContext, useEffect } from "react";

// ! 1.- Crear el contexto para el usuario
const UserContext = createContext();

//! 2.- Vamos a obtener al Provider del UserContext
const { Provider } = UserContext;

//! 3.- Crear componente
const UserProvider = ({ children }) => {
  //! 4.- Creamos nuestro estado global
  const initialState = {
    token: undefined,
    tipo: undefined,
  };
  const [user, setUser] = useState(initialState);

  //! 5.- Manejar el estado
  const guardarInfo = (token, tipo) => {
    setUser((prevState) => ({
      ...prevState,
      token,
      tipo,
    }));
    localStorage.setItem("token", token);
    localStorage.setItem("tipo", tipo);
  };

  const borrarInfoUser = () => {
    setUser(initialState);
    localStorage.clear();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tipo = localStorage.getItem("tipo");
    if (token && tipo) {
      guardarInfo(token, tipo);
    } else {
      guardarInfo(null, null);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //! 6.- Retornamos el componente
  return (
    <Provider
      value={{
        user,
        guardarInfo,
        borrarInfoUser,
      }}
    >
      {children}
    </Provider>
  );
};

//! 7.- Exportamos provider & context
export { UserProvider, UserContext };
