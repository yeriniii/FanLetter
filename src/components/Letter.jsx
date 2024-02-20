import React from "react";
import styled from "styled-components";
import default_profile from "../assets/default_profile.png";
import { useNavigate } from "react-router-dom";

function Letter({ Fandata }) {
  const navigate = useNavigate();

  return (
    <LetterWrapper
      key={Fandata.id}
      onClick={() => navigate(`/letters/${Fandata.id}`)}
    >
      <FanData>
        <FanImage>
          <img
            src={Fandata.avatar ? Fandata.avatar : default_profile}
            alt="이미지"
          ></img>
        </FanImage>
        <FanInfo>
          <p>{Fandata.nickname}</p>
          <p>{Fandata.createdAt}</p>
        </FanInfo>
      </FanData>
      <Content>{Fandata.content}</Content>
    </LetterWrapper>
  );
}
const LetterWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid white;
  padding: 8px;
  margin-bottom: 10px;

  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.05);
  }
`;
const FanData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const FanImage = styled.div`
  width: 110px;
  overflow: hidden;
  height: 110px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    max-width: 100%;
    height: auto;
    border-radius: 50px;
    object-fit: cover;
  }
`;

const FanInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  p:nth-child(1) {
    font-size: 17px;
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: 17px;
    margin-top: 25px;
  }
`;
const Content = styled.p`
  background-color: darkgray;
  border-radius: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export default Letter;
