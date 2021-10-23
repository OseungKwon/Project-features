import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Stack, Button, Divider, Box, Avatar } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";
import {
  addComment,
  editComment,
  removeComment
} from "../../redux/slices/commentSample";
import { check_kor, timeForToday } from "./CommentTool";
import { experimentalStyled as styled } from "@material-ui/core/styles";

import dynamic from "next/dynamic";

const Viewer = dynamic(() => import("../editor/ToastViewer"), { ssr: false });
const Editor = dynamic(() => import("../editor/TuiEditor"), { ssr: false });
const ViewerWithForwardedRef = forwardRef((props, ref) => (
  <Viewer {...props} forwardedRef={ref} />
));
const EditorWithForwardedRef = forwardRef((props, ref) => (
  <Editor {...props} forwardedRef={ref} />
));

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

const ReplyComment = ({ responseTo }) => {
  const user = "a";
  const [local, setLocal] = useState([]);
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const comments = useSelector(state => state.commentSample);

  // mock user
  const editorRef = useRef();
  const viewerRef = useRef();

  // open editor to edit comment
  const [openEditor, setOpenEditor] = useState("");
  const date = new Date(); // 작성 시간

  const onSubmit = e => {
    e.preventDefault();
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();

    const data = {
      content: getContent,
      writer: user,
      postId: "123123",
      responseTo: responseTo,
      commentId: Math.random(),
      created_at: `${date}`
    };
    dispatch(addComment(data));
  };

  // Edit comment
  const onEdit = commentId => {
    // console.log(commentId);
    const editorInstance = editorRef.current.getInstance();
    const getContent = editorInstance.getMarkdown();
    viewerRef.current.getInstance().setMarkdown(getContent);

    console.log(getContent);

    let data = { commentId: commentId, content: getContent };
    dispatch(editComment(data));
  };

  // Remove comment
  const onRemove = commentId => {
    dispatch(removeComment(commentId));
  };

  useEffect(() => {
    localStorage.setItem("reply", JSON.stringify(comments));
    setLocal(comments.filter(comment => comment.responseTo === responseTo));
  }, [comments, responseTo]);
  return (
    <Stack sx={{ m: 1, ml: 4 }}>
      <Button
        onClick={() => {
          setDisplay(!display);
        }}
        sx={{ display: "flex", justifyContent: "flex-start", width: "10rem" }}
      >
        {display && "댓글 숨기기"}
        {!display &&
          (local.length === 0 ? "댓글 달기" : `${local.length}개의 댓글 보기`)}
      </Button>

      {display && (
        <div>
          {local.map((comment, index) => (
            <Box sx={{ m: 2 }} key={comment.commentId}>
              {/* writer 정보, 작성 시간 */}
              <Stack direction="row" spacing={2}>
                <ProfileIcon>{comment.writer.slice(0, 1)}</ProfileIcon>

                <Item>{comment.writer}</Item>

                <Item>{timeForToday(comment.created_at)}</Item>
              </Stack>
              {/* comment 글 내용 */}
              <Box
                key={index}
                sx={{ padding: "0px 20px", color: comment.exist ?? "grey" }}
              >
                <ViewerWithForwardedRef
                  initialValue={comment.content}
                  ref={viewerRef}
                />
              </Box>
              {/* comment 수정 */}
              {user === comment.writer && (
                <>
                  {openEditor === comment.commentId && (
                    <EditorWithForwardedRef
                      initialValue={comment.content}
                      ref={editorRef}
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
              <ReplyComment responseTo={comment.commentId} user={user} />
              <Divider variant="middle" />{" "}
            </Box>
          ))}

          <EditorWithForwardedRef ref={editorRef} />

          <div>
            <Button onClick={onSubmit}>저장</Button>
          </div>
        </div>
      )}
    </Stack>
  );
};

export default ReplyComment;
