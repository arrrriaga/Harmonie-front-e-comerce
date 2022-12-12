import axios from "axios";

const path = `${process.env.REACT_APP_URI_API}/user`;

export const login = async (userInfo) => {
  try {
    const { data } = await axios.post(`${path}/login`, userInfo);
    return data;
  } catch (e) {
    /* const {
      response:{
        data: {
          detalles
        }
      }
    } = e; 
    
    return { error: detalles };
    */
    return { error: e.response.data.detalles };
  }
};

export const getUserInfo = async (id) => {
  try {
    const { data } = await axios.get(`${path}/${id ? id : ""}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(`${path}/getAll`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return data;
  } catch (e) {
    return { error: e.response.data.detalles };
  }
};
