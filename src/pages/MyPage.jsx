import { getMyPage } from "apis/login";
import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import default_profile from "../assets/default_profile.png";
import { updateProfile } from "apis/login";
function MyPage() {
  const [data, setData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [editName, setEditName] = useState("");
  const [editImg, setEditImg] = useState();
  useEffect(() => {
    getMyPage().then((res) => {
      setData(res);
    });
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
    setEditName(data.nickname);
    setEditImg(data.avatar);
  };
  const handleEditSave = async () => {
    const accessToken = localStorage.getItem("access");
    await updateProfile(accessToken, editImg, editName);
  };
  return (
    <Container>
      <MyPageWrapper>
        <h1>프로필 관리</h1>
        <UserInfo>
          <ProfileImage>
            <label htmlFor="fileInput">
              <img
                src={data.avatar ? data.avatar : default_profile}
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
      </MyPageWrapper>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MyPageWrapper = styled.div`
  padding: 30px;
  border-radius: 10px;
  background-color: #ccc;
  flex-direction: column;
  width: 40%;
  height: 40%;
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
export default MyPage;
