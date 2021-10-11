import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Divider, Paper, Button } from "@mui/material";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

import "@toast-ui/editor/dist/toastui-editor.css";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import Comment from "./Comment";
import Markdown from "../component/Markdown";
import UserInfo from "./UserInfo";
import Sub from "./Sub";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
const Qna = ({ user }) => {
  const qna = useSelector((state) => state.qna);
  const comments = useSelector((state) => state.comment);
  const [edit, setEdit] = useState(false);
  console.log(comments);
  console.log(qna);
  return (
    <div style={{ margin: "5rem", display: "flex" }}>
      {user && <Sub user={user} />}
      <Paper sx={{ p: 5, flex: 4 }}>
        <Button onClick={() => setEdit(!edit)}>수정</Button>
        {edit ? (
          <>
            <h1 style={{ fontSize: "50px" }}>{qna.title}</h1>
            <div>
              {qna.tags.map((tag) => (
                <span style={{ marginRight: "0.4rem" }} key={tag}>
                  #{tag}{" "}
                </span>
              ))}
              <span style={{ color: "grey", marginLeft: "3rem" }}>
                <span>{qna.updated_at}</span>
                <span style={{ marginLeft: "1rem" }}>
                  조회수 {qna.view_count}
                </span>
              </span>
            </div>
            <div style={{ marginTop: "3rem", marginBottom: "4rem" }}>
              <Markdown comment={qna} />
            </div>
          </>
        ) : (
          <>
            <form>
              <input value={"hi"} />
            </form>
            <Editor
              usageStatistics={false}
              previewStyle="vertical"
              minHeight="10rem"
              initialValue={qna.content}
              plugins={[
                colorSyntax,
                [codeSyntaxHighlight, { highlighter: Prism }]
              ]}
            />
          </>
        )}

        <Divider />
        <h3 style={{ color: "#676673" }}>답변({comments.length})</h3>
        <Comment user={user} />
      </Paper>
      <UserInfo />
    </div>
  );
};

export default Qna;
