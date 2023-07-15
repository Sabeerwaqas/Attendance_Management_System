import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRoute = ({ Main }) => {
  const navigate = useNavigate();

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/login");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return <ProtectedRoute/>;
};

export default ProtectedRoute;
