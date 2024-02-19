import db from "db.json";
import { createSlice } from "@reduxjs/toolkit";
/*
const ADD_LETTER = "data/ADD_LETTER";
const DELETE_LETTER = "data/DELETE_LETTER";
const MODIFY_LETTER = "data/MODIFY_LETTER";
//action create
export const addLetter = (payload) => {
  return {
    type: ADD_LETTER,
    payload,
  };
};
export const deleteLetter = (payload) => {
  return {
    type: DELETE_LETTER,
    payload,
  };
};
export const modifyLetter = (payload) => {
  return {
    type: MODIFY_LETTER,
    payload,
  };
};
*/
const initialState = db.posts;

/*const data = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LETTER:
      return [...state, action.payload];
    case DELETE_LETTER:
      return state.filter((letter) => {
        return letter.id !== action.payload;
      });
    case MODIFY_LETTER:
      const { id, editedContent } = action.payload;
      return state.map((letter) =>
        letter.id === id ? { ...letter, content: editedContent } : letter
      );

    default:
      return state;
  }
};
*/

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    addLetter: (state, action) => {
      return [...state, action.payload];
      //state.push(action.payload); redux toolkit에 immer라는게 있어서 불변성유지가 자동으로 됌
    },
    deleteLetter: (state, action) => {
      return state.filter((letter) => letter.id !== action.payload);
    },
    modifyLetter: (state, action) => {
      const { id, editedContent } = action.payload;
      return state.map((letter) =>
        letter.id === id ? { ...letter, content: editedContent } : letter
      );
    },
  },
});
export default dataSlice.reducer;
export const { addLetter, deleteLetter, modifyLetter } = dataSlice.actions;
