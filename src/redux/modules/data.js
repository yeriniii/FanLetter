import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  posts: [],
  error: null,
  isError: false,
};
export const __getDatas = createAsyncThunk(
  "__getDatas",
  async (payload, thunkAPI) => {
    //서버통신
    try {
      const response = await axios.get("http://localhost:5001/posts");
      console.log(response.data);
      //네트워크 요청성공시 디스패치해주는 기능
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    addLetter: (state, action) => {
      return { ...state, posts: [...state.posts, action.payload] };
      //state.push(action.payload); redux toolkit에 immer라는게 있어서 불변성유지가 자동으로 됌
    },
    deleteLetter: (state, action) => {
      return {
        ...state,
        posts: state.posts.filter((letter) => letter.id !== action.payload),
      };
    },
    modifyLetter: (state, action) => {
      const { id, editedContent } = action.payload;
      return {
        ...state,
        posts: state.posts.map((letter) =>
          letter.id === id ? { ...letter, content: editedContent } : letter
        ), // 수정된 post만 업데이트
      };
    },
  },
  extraReducers: {
    [__getDatas.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.posts = action.payload;
    },
    [__getDatas.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [__getDatas.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    },
  },
});
export default dataSlice.reducer;
export const { addLetter, deleteLetter, modifyLetter } = dataSlice.actions;
