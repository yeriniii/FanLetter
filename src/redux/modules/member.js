import { createSlice } from "@reduxjs/toolkit";
/*
const SELECT_MEMBER = "member/SELECT_MEMBER";

export const selectMember = (payload) => {
  return {
    type: SELECT_MEMBER,
    payload,
  };
};

const initialState = "카리나";
const member = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_MEMBER:
      return (state = action.payload);
    default:
      return state;
  }
};
*/
const initialState = "카리나";
const memberSlice = createSlice({
  name: "member",
  initialState,
  reducers: {
    selectMember: (state, action) => {
      return (state = action.payload);
    },
  },
});

export default memberSlice.reducer;
export const { selectMember } = memberSlice.actions;
