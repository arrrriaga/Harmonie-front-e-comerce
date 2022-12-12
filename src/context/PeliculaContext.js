import { useState, createContext } from "react";

// ! 1.- Crear el contexto para el usuario
const PeliculaContext = createContext();

//! 2.- Vamos a obtener al Provider del PeliculaContext
const { Provider } = PeliculaContext;

//! 3.- Crear componente
const PeliculaProvider = ({ children }) => {
  //! 4.- Creamos nuestro estado global
  const [peliculas, setPeliculas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  //! 5.- Manejar el estado
  const guardarPeliculas = (newPeliculas) => setPeliculas(newPeliculas);

  const agregarACarrito = (pelicula) => setCarrito([...carrito, pelicula]);
  const eliminarDeCarrito = (index) => {
    const newCarrito = [...carrito];
    newCarrito.splice(index, 1);
    setCarrito(newCarrito);
  };
  const limpiarCarrito = () => setCarrito([]);

  //! 6.- Retornamos el componente
  return (
    <Provider
      value={{
        peliculas,
        guardarPeliculas,
        carrito,
        agregarACarrito,
        eliminarDeCarrito,
        limpiarCarrito,
      }}
    >
      {children}
    </Provider>
  );
};

//! 7.- Exportamos provider & context
export { PeliculaProvider, PeliculaContext };
