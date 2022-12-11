import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/v1/pelicula`;

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
