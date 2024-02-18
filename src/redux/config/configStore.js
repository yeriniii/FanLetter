import { createStore } from "redux";
import { combineReducers } from "redux";
import data from "../modules/data";
import member from "../modules/member";
import { devToolsEnhancer } from "redux-devtools-extension";
const rootReducer = combineReducers({
  data: data,
  member,
});
const store = createStore(rootReducer, devToolsEnhancer());

export default store;
