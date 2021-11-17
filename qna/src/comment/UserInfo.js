import React from "react";
import { useSelector } from "react-redux";
import { Stack, Button, Paper, Avatar } from "@mui/material";
import { check_kor, Item } from "../component/CommentTool";
const UserInfo = () => {
  const { writer } = useSelector((state) => state.qna);
  return (
    <Paper sx={{ p: 3, ml: 3, height: "6rem", flex: 1 }}>
      <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
        <Avatar></Avatar>
        <Item>{writer}</Item>
      </Stack>

      <Button variant="outlined" style={{ width: "100%" }}>
        구독하기
      </Button>
    </Paper>
  );
};

export default UserInfo;
