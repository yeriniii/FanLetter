import React from "react";
import axios from "axios";

export const login = async (id, password) => {
  try {
    const response = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      {
        id: id,
        password: password,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const register = async (id, password, nickname) => {
  try {
    const response = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/register",
      {
        id: id,
        password: password,
        nickname: nickname,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyPage = async () => {
  try {
    const accessToken = localStorage.getItem("access");
    const response = await axios.get(
      `https://moneyfulpublicpolicy.co.kr/user`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (accessToken, imgFile, nickname) => {
  try {
    const formData = new FormData();
    formData.append("avatar", imgFile); //이미지 파일 추가
    formData.append("nickname", nickname);
    const response = await axios.patch(
      `https://moneyfulpublicpolicy.co.kr/profile`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export default login;
