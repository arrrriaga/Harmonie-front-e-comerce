import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Logout = () => {
  useEffect(() => {
    borrarInfoUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { borrarInfoUser } = useContext(UserContext);
  return null;
};

export default Logout;
