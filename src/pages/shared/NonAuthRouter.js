import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NonAuthRouter() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      navigate(`/`);
    }
  }, [navigate]);
  return <Outlet />;
}

export default NonAuthRouter;
