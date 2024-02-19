import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logined: (state, action) => {
      state.isLogin = true;
    },
    logouted: (state, action) => {
      state.isLogin = false;
    },
  },
});
export default authSlice.reducer;
export const { logined, logouted } = authSlice.actions;
