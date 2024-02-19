import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logouted } from "../redux/modules/authSlice";
function Layout() {
  const isLoggedIn = true; // 로그인 상태를 확인하는 예시 코드입니다.
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!isLoggedIn) {
    return null; // 로그인되지 않은 경우 렌더링하지 않습니다.
  }
  const handleLogout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("userId");
    localStorage.removeItem("nickname");
    dispatch(logouted());
    navigate(`/login`);
  };

  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem>
            <ProfileLink to="/">HOME</ProfileLink>
          </NavItem>
          <NavItem>
            <ProfileLink to="/mypage">내 프로필</ProfileLink>
          </NavItem>
        </NavList>
        <NavItem>
          <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  padding: 10px 10px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5%;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;
const ProfileLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: gold;
  }
`;
const LogoutButton = styled.button`
  color: black;
  font-size: 15px;
  text-decoration: none;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    color: gold;
  }
`;
export default Layout;
