import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "../../components/Letters/Detail";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import MyPage from "../../components/MyPage";
import NonAuthRouter from "./NonAuthRouter";
import AuthRouter from "./AuthRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NonAuthRouter />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<AuthRouter />}>
          <Route path="/" element={<Home />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/letters/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
