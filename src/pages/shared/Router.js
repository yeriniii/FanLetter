import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "../../components/Letters/Detail";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";
import MyPage from "../../components/MyPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getDatas } from "../../redux/modules/data";
import NonAuthRouter from "./NonAuthRouter";
import AuthRouter from "./AuthRouter";

const Router = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.data);
  useEffect(() => {
    // 페이지가 로드될 때 데이터 가져오기
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
