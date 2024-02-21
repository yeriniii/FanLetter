import axios from "axios";
import { authInstance } from "../axios/api";
//주석은 청크로 적은 부분

export const login = async (id, password) => {
  try {
    const response = await authInstance.post("/login", {
      id: id,
      password: password,
    });
    return response.data;
  } catch (error) {
    return error.response.data.message;
    //console.log(error);
  }
};
/*
export const __login = createAsyncThunk(
  "__login",
  async (payload, thunkAPI) => {
    //서버통신
    try {
      const response = await axios.post("https://moneyfulpublicpolicy.co.kr/login");
      console.log(response.data);
      //네트워크 요청성공시 디스패치해주는 기능
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
*/
export const register = async (id, password, nickname) => {
  try {
    const response = await authInstance.post("/register", {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    return error.response.data.message;
  }
};
/*
export const __register = createAsyncThunk(
  "__register",
  async (payload, thunkAPI) => {
    //서버통신
    try {
      const response = await axios.post("https://moneyfulpublicpolicy.co.kr/register", payload);
      console.log(response.data);
      //네트워크 요청성공시 디스패치해주는 기능
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
*/
export const getMyPage = async () => {
  try {
    const accessToken = localStorage.getItem("access");
    const response = await authInstance.get("/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      //token만료
      //보통리프레시토큰받음
      alert("token만료!");
    }
    console.log(error);
  }
};
/*
export const __getMyPage = createAsyncThunk(
  "__getMyPage",
  async (payload, thunkAPI) => {
    //서버통신
    try {
      const accessToken = localStorage.getItem("access");
      const response = await axios.get("https://moneyfulpublicpolicy.co.kr/user",{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      //네트워크 요청성공시 디스패치해주는 기능
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
*/
export const updateProfile = async (accessToken, imgFile, nickname) => {
  try {
    const formData = new FormData();
    formData.append("avatar", imgFile); //이미지 파일 추가
    formData.append("nickname", nickname);
    const response = await authInstance.patch("/profile", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
/*
export const __updateProfile = createAsyncThunk(
  "__updateProfile",
  async (payload, thunkAPI) => {
    //서버통신
    try {
      const formData = new FormData();
    formData.append("avatar", payload.imgFile); //이미지 파일 추가
    formData.append("nickname", payload.nickname);
      const response = await axios.patch("https://moneyfulpublicpolicy.co.kr/user",formData,{
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
*/
