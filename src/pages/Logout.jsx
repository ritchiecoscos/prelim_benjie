import React from "react";
import { useNavigate } from "react-router-dom";

function Logout({ setIsLogout }) {
  const history = useNavigate();
  const logout = () => {
    setIsLogout(false);
  };

  return <div>Logout</div>;
}

export default Logout;
