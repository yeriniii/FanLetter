import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import MyPage from "pages/MyPage";
import { useSelector } from "react-redux";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="letters/:id" element={<Detail />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
