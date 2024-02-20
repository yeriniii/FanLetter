import data from "../modules/data";
import auth from "../modules/authSlice";
import member from "../modules/member";
import modalReducer from "../../redux/modules/modal";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    data: data,
    auth: auth,
    member: member,
    modal: modalReducer,
  },
});

export default store;
