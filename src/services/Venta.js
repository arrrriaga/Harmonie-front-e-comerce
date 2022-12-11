import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/v1/venta`;

export const guardarVenta = async (datosVenta) => {
  console.log("path: ", path);
  console.log("datosVenta services: ", datosVenta);
  try {
    const { data } = await axios.post(path, datosVenta, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log("Venta  guardada: ", data);
    return data;
  } catch (e) {
    console.log("Venta  no guardada");
    return { error: e.response.data.detalles };
  }
};
