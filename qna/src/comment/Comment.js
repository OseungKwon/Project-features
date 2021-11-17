import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import uuid from "react-uuid";

import { addComment, editComment, removeComment } from "../redux/comment";
import ReplyComment from "./ReplyComment";

// dot icon
//import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Stack, Button, Divider, Avatar } from "@mui/material";

import { Box } from "@mui/system";

// markdown, toast editor
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import Markdown from "../component/Markdown";

import { check_kor, timeForToday, Item } from "../component/CommentTool";

const Comment = ({ user }) => {
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comment);
  const [display, setDisplay] = useState(false);
  const editorRef = useRef();
  const date = new Date(); // 작성 시간

  // open editor to edit comment
  const [openEditor, setOpenEditor] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    // 마크다운 변환
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setDisplay(!display);

    // 데이터 저장
    // setCommentValule(text);
    const data = {
      content: getContent,
      writer: user,
      postId: "123123",
      responseTo: "root",
      commentId: uuid(),
      created_at: `${date}`
    };
    dispatch(addComment(data));
  };

  // Edit comment
  const onEdit = (commentId) => {
    // console.log(commentId);
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    console.log(getContent);

    let data = { commentId: commentId, content: getContent };
    dispatch(editComment(data));
  };

  // Remove comment
  const onRemove = (commentId) => {
    dispatch(removeComment(commentId));
  };

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter((comment) => comment.responseTo === "root"));
  }, [comments]);

  return (
    <Box>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ width: "5rem" }}
      >
        답변 달기
      </Button>

      {display && (
        <>
          <Editor ref={editorRef} />
          <div>
            <Button onClick={onSubmit}>저장</Button>
          </div>
        </>
      )}

      {local.map((comment, index) => (
        <Box sx={{ m: 2 }} key={comment.commentId}>
          {/* writer 정보, 작성 시간 */}
          <Stack direction="row" spacing={2}>
            <Avatar></Avatar>
            <Item>{comment.writer}</Item>

            <Item>{timeForToday(comment.created_at)}</Item>
          </Stack>

          {/* comment 글 내용 */}
          <Box
            key={index}
            sx={{ padding: "0px 20px", color: comment.exist || "grey" }}
            // exist는 초기값으로 true를 가지며, removeComment를 통해 false로 변경된다.
          >
            <Markdown comment={comment} />
          </Box>

          {/* comment 수정 */}
          {comment.exist && user === comment.writer && (
            <>
              {openEditor === comment.commentId && (
                <Editor initialValue={comment.content} ref={editorRef} />
              )}
              <Button
                onClick={() => {
                  if (comment.commentId === openEditor) {
                    onEdit(comment.commentId);
                    setOpenEditor("");
                  } else {
                    setOpenEditor(comment.commentId);
                  }
                }}
              >
                수정
              </Button>

              {/* comment 삭제 */}
              <Button
                onClick={() => {
                  onRemove(comment.commentId);
                }}
              >
                삭제
              </Button>
            </>
          )}

          {/* 대댓글 컴포넌트 */}
          {/* <ReplyComment responseTo={comment.commentId} user={user} /> */}

          <Divider variant="middle" />
        </Box>
      ))}
    </Box>
  );
};

export default Comment;
