import React, { useState, useEffect, useRef, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addComment,
  editComment,
  removeComment
} from "../../redux/slices/commentSample";
//import ReplyComment from "./ReplyComment";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import ReplyComment from "./ReplyComment";
// dot icon
//import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Stack, Button, Divider, Box, Avatar } from "@material-ui/core";
import dynamic from "next/dynamic";
// markdown, toast editor
const Viewer = dynamic(() => import("../editor/ToastViewer"), { ssr: false });
const Editor = dynamic(() => import("../editor/TuiEditor"), { ssr: false });
const ViewerWithForwardedRef = forwardRef((props, ref) => (
  <Viewer {...props} forwardedRef={ref} />
));
const EditorWithForwardedRef = forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
));
import { check_kor, timeForToday } from "./CommentTool";
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "#737373",
  fontSize: "1rem",
  lineHeight: "1rem"
}));

const ProfileIcon = styled(Avatar)(() => ({
  backgroundColor: "orangered",
  width: "2rem",
  height: "2rem"
}));
const Comment = () => {
  const user = "a";
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();
  const comments = useSelector(state => state.commentSample);
  const [display, setDisplay] = useState(false);
  const editorRef = useRef();
  const commentRef = useRef();
  const viewerRef = useRef();
  const date = new Date(); // 작성 시간

  // open editor to edit comment
  const [openEditor, setOpenEditor] = useState("");

  const onSubmit = e => {
    console.log("submit");
    e.preventDefault();

    // 마크다운 변환
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    setDisplay(!display);

    // 데이터 저장
    // setCommentValule(text);
    const data = {
      content: getContent,
      writer: "a",
      postId: "123123",
      responseTo: "root",
      commentId: Math.random(),
      created_at: `${date}`
    };
    dispatch(addComment(data));
  };

  // Edit comment
  const onEdit = commentId => {
    // console.log(commentId);
    const editorInstance = commentRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    viewerRef.current.getInstance().setMarkdown(getContent);

    let data = { commentId: commentId, content: getContent };
    dispatch(editComment(data));
  };

  // Remove comment
  const onRemove = commentId => {
    dispatch(removeComment(commentId));
  };

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter(comment => comment.responseTo === "root"));
  }, [comments]);

  return (
    <Box>
      <h2>댓글 작성하기</h2>
      <EditorWithForwardedRef ref={editorRef} />
      <Button onClick={onSubmit}>제출</Button>
      {local.map((comment, index) => (
        <Box sx={{ m: 2 }} key={comment.commentId}>
          <Stack direction="row" spacing={2}>
            <ProfileIcon>{comment.writer.slice(0, 1)}</ProfileIcon>
            <Item>{comment.writer}</Item>

            <Item>{timeForToday(comment.created_at)}</Item>
          </Stack>
          <Box
            key={index}
            sx={{ padding: "0px 20px", color: comment.exist || "grey" }}
            // exist는 초기값으로 true를 가지며, removeComment를 통해 false로 변경된다.
          >
            <ViewerWithForwardedRef
              initialValue={comment.content}
              ref={viewerRef}
            />
          </Box>

          {/* comment 수정 */}
          {comment.exist && user === comment.writer && (
            <>
              {openEditor === comment.commentId && (
                <EditorWithForwardedRef
                  initialValue={comment.content}
                  ref={commentRef}
                />
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
          <ReplyComment responseTo={comment.commentId} />
          <Divider variant="middle" />
        </Box>
      ))}
    </Box>
  );
};

export default Comment;
