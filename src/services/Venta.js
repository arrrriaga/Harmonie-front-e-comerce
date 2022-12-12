import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/venta`;

export const guardarVenta = async (datosVenta) => {
  try {
    const { data } = await axios.post(path, datosVenta, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
