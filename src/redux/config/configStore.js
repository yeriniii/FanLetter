import data from "../modules/data";
//import auth from "../modules/authSlice";
import member from "../modules/member";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    data: data,
    //auth: auth,
    member: member,
  },
});

export default store;
