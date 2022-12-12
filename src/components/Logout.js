import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Logout = () => {
  const { borrarInfoUser } = useContext(UserContext);

  useEffect(() => {
    borrarInfoUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
};

export default Logout;
