import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Detail from "pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="letters/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
