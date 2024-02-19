import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import MyPage from "pages/MyPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getDatas } from "../../redux/modules/data";

const Router = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(__getDatas());
  }, [dispatch]);
  if (isLoading) {
    return <div>loading..</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          path="/mypage"
          element={isLogin ? <MyPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/letters/:id"
          element={isLogin ? <Detail /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
