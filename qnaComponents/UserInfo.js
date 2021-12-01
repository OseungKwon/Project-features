import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Stack, Button, Paper, Box, Avatar } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

export const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "#737373",
  fontSize: "1rem",
  lineHeight: "1rem"
}));

export const ProfileIcon = styled(Avatar)(() => ({
  backgroundColor: "orangered",
  width: "2rem",
  height: "2rem"
}));

const UserInfo = () => {
  const { writer } = useSelector(state => state.qnaSample);
  const [subscribe, setSubscribe] = useState(false);
  return (
    <>
      <Paper sx={{ p: 3, mt: 20 }}>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <ProfileIcon>{writer.slice(0, 1)}</ProfileIcon>
          <Item>{writer}</Item>
        </Stack>
        {subscribe ? (
          <Button
            variant="outlined"
            sx={{
              width: "100%",
              bgcolor: "#00AB55",
              color: "white"
            }}
            onClick={() => {
              setSubscribe(!subscribe);
            }}
          >
            구독해제
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{ width: "100%" }}
            onClick={() => {
              setSubscribe(!subscribe);
            }}
          >
            구독하기
          </Button>
        )}
      </Paper>
    </>
  );
};

export default UserInfo;
