import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login, register } from "../../apis/login";
import useForm from "hooks/useForm";
import { logined } from "../../redux/modules/authSlice";
const textMap = {
  login: "로그인",
  register: "회원가입",
};
const AuthForm = ({ type }) => {
  const text = textMap[type];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();
  const [errorMsg, setErrorMsg] = useState();
  const authHandler = async (e) => {
    e.preventDefault();
    try {
      if (type === "login") {
        const loginResult = await login(id, pw);
        if (loginResult && loginResult.success) {
          const { accessToken, userId, avatar, nickname } = loginResult;
          localStorage.setItem("access", accessToken);
          localStorage.setItem("userId", userId);
          localStorage.setItem("nickname", nickname);
          localStorage.setItem("avatar", avatar);
          alert("로그인 완료");
          navigate(`/`);
          dispatch(logined());
        } else {
          // 로그인 실패
          setErrorMsg(loginResult);
        }
      } else if (type === "register") {
        const registerResult = await register(id, pw, name);
        if (registerResult && registerResult.success) {
          alert("회원가입완료");
          navigate(`/login`);
        } else {
          setErrorMsg(registerResult);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthWrapper>
      <AuthFormWrapper>
        <h1>FanLetter</h1>
        <h3>{text}</h3>
        <Auth onSubmit={authHandler}>
          <input
            type="text"
            placeholder="아이디(4~10글자)"
            value={id}
            onChange={onChangeId}
            required
          />
          <input
            type="password"
            placeholder="비밀번호(4~15글자)"
            value={pw}
            onChange={onChangePw}
            required
          />
          {type === "register" && (
            <input
              value={name}
              onChange={onChangeName}
              type="text"
              name="username"
              placeholder="닉네임(1~10글자)"
              required
            ></input>
          )}
          {errorMsg && (
            <div style={{ color: "red", fontSize: "16px" }}>{errorMsg}</div>
          )}
          <ButtonWrapper>
            <button>{text}</button>
          </ButtonWrapper>
        </Auth>
        <Footer>
          {type === "login" ? (
            <Link to="/register">회원가입</Link>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </Footer>
      </AuthFormWrapper>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h3 {
    font-weight: bold;
    margin-bottom: 20px;
  }
`;
const AuthFormWrapper = styled.div`
  padding: 30px;
  background-color: white;
  flex-direction: column;
  width: 30%;
  height: 50%;
  display: flex;
  input {
    font-size: 15px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid gray;
    padding-bottom: 0.3rem;
    outline: none;
    &:focus {
      border: 3px solid teal;
      border-radius: 5px;
    }
  }
`;
const Auth = styled.form`
  display: flex;
  flex-direction: column;
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;

  justify-content: center;
  align-items: center;
  button {
    height: 37px;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 0.25rem 1rem;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      color: white;
      background-color: teal;
    }
  }
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: gray;
    text-decoration: underline;
    &:hover {
      color: teal;
    }
  }
`;

export default AuthForm;
