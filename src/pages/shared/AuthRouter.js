import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
function AuthRouter() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.data);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    if (!token) {
      navigate(`/login`);
    }
    setRendered(true);
  }, [navigate]);
  if (!rendered) {
    return null;
  }
  return <Outlet />;
}

export default AuthRouter;
