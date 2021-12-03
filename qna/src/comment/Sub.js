import React, { useState } from "react";
import { Stack, Button, Paper, Popover } from "@mui/material";
import { Box } from "@mui/system";
import { CopyToClipboard } from "react-copy-to-clipboard"; // 클립보드에 복사하게 도와주는 라이브러리
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { toggleLike } from "../redux/qna";
import { useSelector, useDispatch } from "react-redux";

const Sub = ({ user }) => {
  const dispatch = useDispatch();
  const [like, setLike] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [copyed, setCopyed] = useState(false);

  const onClickLike = () => {
    setLike(!like);
    dispatch(toggleLike(user));
  };

  return (
    <Stack>
      <Paper sx={{ p: 3, mr: 3, mb: 1.5, height: "1.2rem", width: "1.2rem" }}>
        <Stack onClick={onClickLike}>
          {like ? (
            <FavoriteIcon
              style={{
                color: "#ff5151",
                fontSize: "2rem",
                position: "relative",
                bottom: "0.4rem",
                right: "0.4rem",
                cursor: "pointer",
              }}
            />
          ) : (
            <FavoriteBorderIcon
              style={{
                color: "#676673",
                fontSize: "2rem",
                position: "relative",
                bottom: "0.4rem",
                right: "0.4rem",
                cursor: "pointer",
              }}
            />
          )}
        </Stack>
      </Paper>
      <Paper sx={{ p: 3, mr: 3, mt: 1.5, height: "1.2rem", width: "1.2rem" }}>
        <MoreVertIcon
          style={{
            color: "#676673",
            fontSize: "2rem",
            position: "relative",
            bottom: "0.4rem",
            right: "0.4rem",
            cursor: "pointer",
          }}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        />
      </Paper>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{ p: 1, pl: 1, pr: 1, display: "flex", flexDirection: "column" }}
        >
          <Button sx={{ color: "gray", fontSize: "1rem", pl: 3, pr: 3 }}>
            SNS 공유
          </Button>
          <CopyToClipboard text={window.location.href}>
            <Button
              sx={{ color: "gray", fontSize: "1rem", pl: 3, pr: 3 }}
              onClick={() => {
                setCopyed(true);
              }}
            >
              {copyed ? "(복사되었습니다)" : "링크 공유"}
            </Button>
          </CopyToClipboard>
        </Box>
      </Popover>
    </Stack>
  );
};

export default Sub;
