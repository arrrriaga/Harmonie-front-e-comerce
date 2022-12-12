import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/pelicula`;

export const verPeliculas = async () => {
  try {
    const { data } = await axios.get(`${path}/getAll`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};

export const agregarPeliculas = async (pelicula) => {
  try {
    const { data } = await axios.post(path, pelicula, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};

export const getMisPeliculas = async () => {
  try {
    const { data } = await axios.get(`${path}/misPeliculas`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
