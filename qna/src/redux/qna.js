import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  writer: "jamong",
  title: "타이틀123123",
  intro: "",
  tags: ["123", "aaa", "bbbb"],
  content: "# 안녕하세요 \n## 제 이름은 자몽입니다\n ```js\nconsole.log('hi');",
  image: "",
  is_open: "",
  updated_at: "2010년 12월 2일",
  view_count: "45",
  likes: []
};
export const commentSlice = createSlice({
  name: "qna",
  initialState,
  reducers: {
    addQna(state, action) { },
    toggleLike(state, action) {
      if (state.likes.find(like => like === action.payload)) {
        state.likes = state.likes.filter((like) => like !== action.payload);
      } else {
        state.likes.push(action.payload)
      }
    }
  }
});
export const { addQna,toggleLike } = commentSlice.actions;
export default commentSlice.reducer;
