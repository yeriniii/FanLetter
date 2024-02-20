import React from "react";
import { useDispatch } from "react-redux";
import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { selectMember } from "../../redux/modules/member";

const MemberTabs = () => {
  const dispatch = useDispatch();
  const chooseMember = useSelector((state) => state.member);
  return (
    <Wrapper
      onClick={(e) => {
        dispatch(selectMember(e.target.textContent));
      }}
    >
      <Tab chooseMember={chooseMember}>카리나</Tab>
      <Tab chooseMember={chooseMember}>윈터</Tab>
      <Tab chooseMember={chooseMember}>닝닝</Tab>
      <Tab chooseMember={chooseMember}>지젤</Tab>
    </Wrapper>
  );
};
const Wrapper = styled.ul`
  display: flex;
  background-color: gray;
  padding: 10px;
  width: 45%;
  justify-content: space-between;
  border-radius: 9px;
  text-align: center;
`;

const Tab = styled.li`
  ${(props) => {
    if (props.chooseMember === props.children) {
      return css`
        background-color: gold;
        color: black;
      `;
    }
    return css`
      background-color: black;
      color: white;
    `;
  }}

  display: flex; /* 내부 요소를 가운데 정렬하기 위해 flexbox 사용 */
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; /* 수평 가운데 정렬 */
  width: 100px;
  height: 40px;
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(0.9);
  }
`;

export default MemberTabs;
