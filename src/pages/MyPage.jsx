import { getMyPage } from "apis/login";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import default_profile from "../assets/default_profile.png";
import { updateProfile } from "apis/login";
import { useNavigate } from "react-router-dom";
function MyPage() {
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editImg, setEditImg] = useState();
  const [message, setMessage] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
    });
  }, [isEdit]);

  const handleEdit = () => {
    setIsEdit(true);
    setEditName(data.nickname);
    setEditImg(data.avatar);
  };
  const handleEditSave = async () => {
    try {
      const accessToken = localStorage.getItem("access");
      const response = await updateProfile(accessToken, editImg, editName);
      setMessage(response.message);
      localStorage.setItem("nickname", editName);
      setIsEdit(false);
      setTimeout(() => {
        setMessage(null);
      }, 3000); // 3초 후에 메시지를 초기화합니다.
    } catch (error) {
      console.log("프로필업뎃안됌");
    }
  };
  return (
    <>
      <HomeBtn>
        <button onClick={() => navigate(`/`)}>Home</button>
      </HomeBtn>
      <Container>
        <MyPageWrapper>
          <h1>프로필 관리</h1>
          <UserInfo>
            <ProfileImage>
              <label htmlFor="fileInput">
                <img
                  src={data?.avatar ? data.avatar : default_profile}
                  alt="프로필 이미지"
                />
              </label>
              {isEdit && (
                <input
                  id="fileInput"
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) => setEditImg(e.target.files[0])}
                />
              )}
            </ProfileImage>
            <UserName>
              {isEdit ? (
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                <span>{data?.nickname}</span>
              )}
            </UserName>
            <UserId>{data?.id}</UserId>
          </UserInfo>
          <Button>
            {isEdit ? (
              <>
                <button onClick={() => setIsEdit(false)}>취소</button>
                <button onClick={handleEditSave}>저장</button>
              </>
            ) : (
              <button onClick={handleEdit}>프로필 수정</button>
            )}
          </Button>
          {message && <Message>{message}</Message>}
        </MyPageWrapper>
      </Container>
    </>
  );
}
const Container = styled.div`
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
const MyPageWrapper = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: #ccc;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
`;
const UserInfo = styled.div`
  margin-top: 30px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const ProfileImage = styled.div`
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
const UserId = styled.p`
  margin-top: 20px;
  color: gray;
  font-size: 20px;
`;
const UserName = styled.p`
  margin-top: 20px;
  font-size: 25px;
  font-weight: bold;
  input {
    width: 100%;
    border: none;
    border-bottom: 2px solid teal;

    background-color: #ccc;
    font-size: 25px;
    font-weight: bold;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 10px;
  button {
    cursor: pointer;
    border-radius: 4px;
    border: none;
    padding: 8px;
    &:hover {
      background-color: teal;
      color: white;
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
const Message = styled.div`
  margin-top: 20px;
  color: teal;
  font-weight: bold;
`;
export default MyPage;
