// import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import commentReducer from "./comment";
import qnaReducer from "./qna";
export default combineReducers({
  comment: commentReducer,
  qna: qnaReducer,
});
