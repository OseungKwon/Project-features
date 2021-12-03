import React, { useState } from "react";
import { useSelector } from "react-redux";

import dynamic from "next/dynamic";

import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Paper, Button, Divider, Grid, Stack } from "@material-ui/core";
import Comment from "./Comment";
import UserInfo from "./UserInfo";
import QnaShare from "./QnaShare";
const Viewer = dynamic(() => import("../editor/TuiViewer"), { ssr: false });
const Editor = dynamic(() => import("../editor/TuiEditor"), { ssr: false });

const RootStyles = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.background.neutral
}));

export default function QnaDetails() {
  const qna = useSelector(state => state.qnaSample);
  const comments = useSelector(state => state.commentSample);
  const [edit, setEdit] = useState(false);
  const user = "자몽";

  return (
    <>
      <RootStyles>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Stack>
            <QnaShare />
          </Stack>
          <Grid item xs={7}>
            <Paper sx={{ p: 5, mt: 20, mb: 5 }}>
              {/* <Button onClick={() => setEdit(!edit)}>수정</Button>
              <Button onClick={() => setEdit(!edit)}>삭제</Button> */}

              <h1 style={{ fontSize: "50px" }}>{qna.title}</h1>
              <div>
                {qna.tags.map(tag => (
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
                <Viewer post={qna} />
              </div>
            </Paper>
            <Paper sx={{ p: 5 }}>
              <h3
                style={{
                  color: "#676673",
                  marginBottom: "2rem"
                }}
              >
                답변({comments.length})
              </h3>
              <Comment user={user} />
            </Paper>
          </Grid>
          <Grid item xs={2}>
            <UserInfo />
          </Grid>
        </Grid>
      </RootStyles>
    </>
  );
}
