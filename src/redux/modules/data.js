import fakeData from "fakeData.json";
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
const initialState = fakeData;

const data = (state = initialState, action) => {
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
export default data;
