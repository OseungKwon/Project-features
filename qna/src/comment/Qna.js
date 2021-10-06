import React from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import { Stack, Button, Divider, Paper } from "@mui/material";

import Comment from "./Comment";
import Markdown from "../component/Markdown";
import UserInfo from "./UserInfo";
import Sub from "./Sub";

const Qna = ({ user }) => {
  const qna = useSelector((state) => state.qna);
  const comments = useSelector((state) => state.comment);
  console.log(comments);
  console.log(qna);
  return (
    <div style={{ margin: "10rem", display: "flex" }}>
      <Sub />
      <Paper sx={{ p: 5, flex: 4 }}>
        <h1 style={{ fontSize: "50px" }}>{qna.title}</h1>
        <div>
          {qna.tags.map((tag) => (
            <span style={{ marginRight: "0.4rem" }} key={tag}>
              #{tag}{" "}
            </span>
          ))}
          <span style={{ color: "grey", marginLeft: "3rem" }}>
            <span>{qna.updated_at}</span>
            <span style={{ marginLeft: "1rem" }}>조회수 {qna.view_count}</span>
          </span>
        </div>
        <div style={{ marginTop: "3rem", marginBottom: "4rem" }}>
          <Markdown comment={qna} />
        </div>
        <Divider />
        <h3 style={{ color: "#676673" }}>답변({comments.length})</h3>
        <Comment user={user} />
      </Paper>
      <UserInfo />
    </div>
  );
};

export default Qna;
