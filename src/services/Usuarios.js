import axios from "axios";
const path = `${process.env.REACT_APP_URI_API}/v1/user`;

export const login = async (userInfo) => {
  try {
    const { data } = await axios.post(`${path}/login`, userInfo);

    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};

export const getUserInfo = async () => {
  try {
    const { data } = await axios.get(path, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
