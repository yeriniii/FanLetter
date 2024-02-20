import React from "react";
import styled from "styled-components";
import MemberTabs from "./MemberTabs";
import aespa from "../../assets/aespa.jpeg";

const Header = ({ setSelectMember, selectMember }) => {
  return (
    <Container>
      <Title>에스파 팬레터 컬렉션</Title>
      <MemberTabs
        selectMember={selectMember}
        setSelectMember={setSelectMember}
      ></MemberTabs>
    </Container>
  );
};
const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: gold;
  margin-top: 45px;
`;

const Container = styled.div`
  width: 100%;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-image: url(${aespa});
  background-size: contain;
  background-position: center;
`;
export default Header;
