import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logouted } from "../../redux/modules/authSlice";
import { useEffect } from "react";
import { useState } from "react";
import { showModal, hideModal } from "../../redux/modules/modal";
import ValidationModal from "../ValidationModal";
import { useSelector } from "react-redux";
function Layout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isVisible, message, onConfirm, showCancelButton } = useSelector(
    (state) => state.modal
  );
  const [user, setUser] = useState(localStorage.getItem("userId"));
  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setUser(userId);
  }, [user]);
  const handleLogout = () => {
    /*localStorage.removeItem("access");
          localStorage.removeItem("userId");
          localStorage.removeItem("nickname");
          localStorage.removeItem("avatar");
          dispatch(logouted());
          setUser(null);
          //로그아웃되면 바로로그인화면
          navigate(`/login`);*/
    dispatch(
      showModal({
        message: "정말 로그아웃 하시겠습니까?",
        showCancelButton: true,
        onConfirm: async () => {
          dispatch(hideModal());
          localStorage.removeItem("access");
          localStorage.removeItem("userId");
          localStorage.removeItem("nickname");
          localStorage.removeItem("avatar");
          dispatch(logouted());
          setUser(null);
          //로그아웃되면 바로로그인화면
          navigate(`/login`);
        },
      })
    );
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
        <NavRight>
          {user ? (
            <>
              <UserId>{user}</UserId>
              <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
              {isVisible && (
                <ValidationModal
                  isVisible={isVisible}
                  message={message}
                  onCancel={() => dispatch(hideModal())}
                  onConfirm={onConfirm}
                  showCancelButton={showCancelButton}
                />
              )}
            </>
          ) : (
            <ProfileLink to="/login">로그인</ProfileLink>
          )}
        </NavRight>
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

const NavRight = styled.div`
  display: flex;
  align-items: center;
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
  margin-left: 20px;
  &:hover {
    color: gold;
  }
`;

const UserId = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export default Layout;
