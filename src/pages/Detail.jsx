import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import default_profile from "../assets/default_profile.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteLetter, modifyLetter } from "../redux/modules/data";

function Detail() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.data);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const { id } = useParams();
  const { avatar, nickname, createdAt, writedTo, content } = posts.find(
    (item) => item.id === id
  );
  const navigate = useNavigate();

  const deletedLetter = () => {
    const isDelete = window.confirm("정말로 삭제하시겠습니까?");
    if (!isDelete) return;
    navigate(`/`);
    dispatch(deleteLetter(id));
  };
  const handleEditClick = () => {
    setIsEditing(true); // 수정 모드로 변경
    setEditedContent(content);
  };
  const handleSaveClick = () => {
    if (content === editedContent) {
      alert("변경사항이 없습니다!");
    } else {
      const isModified = window.confirm("이대로 변경하시겠습니까?");
      if (!isModified) return;
      setIsEditing(false);
    }
    dispatch(modifyLetter({ id, editedContent }));
  };
  return (
    <>
      <HomeBtn>
        <button onClick={() => navigate(`/`)}>Home</button>
      </HomeBtn>
      <LetterDetailWrapper>
        <Container>
          <FanImage>
            <img src={avatar ? avatar : default_profile} alt="이미지"></img>
          </FanImage>
          <NewFanInfo>
            <p>{nickname}</p>
            <p>{createdAt}</p>
          </NewFanInfo>
        </Container>
        <WritedTo>
          <p>To: {writedTo}</p>
        </WritedTo>
        {isEditing ? (
          <>
            <NewContent>
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              ></textarea>
            </NewContent>
            <ButtonWrapper>
              <button onClick={handleSaveClick}>수정 완료</button>
              <button onClick={() => setIsEditing(false)}>취소</button>
            </ButtonWrapper>
          </>
        ) : (
          <>
            <NewContent>{content}</NewContent>
            <ButtonWrapper>
              <button onClick={handleEditClick}>수정</button>
              <button onClick={() => deletedLetter()}>삭제</button>
            </ButtonWrapper>
          </>
        )}
      </LetterDetailWrapper>
    </>
  );
}
const LetterDetailWrapper = styled.div`
  background-color: gray;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  width: 50%;
  height: 70%;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const NewFanInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;

  p:nth-child(1) {
    font-size: 30px;
    font-weight: bold;
    margin-left: 20px;
  }
  p:nth-child(2) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;
const WritedTo = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
`;
const NewContent = styled.div`
  background-color: black;
  margin-top: 15px;
  color: white;
  font-size: 30px;
  font-weight: 400;
  width: 100%;
  height: 60%;
  border-radius: 8px;
  letter-spacing: 3px;
  textarea {
    background-color: black;
    color: white;
    font-size: 30px;
    font-weight: 400;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    padding: 0px;
    margin: 0px;
    border: none;
  }
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0 10px;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: tomato;
    }
  }
`;
const HomeBtn = styled.div`
  margin: 60px;
  button {
    border: none;
    background-color: black;
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background-color: gold;
      color: black;
      transform: scale(1.2);
    }
  }
`;
export default Detail;
