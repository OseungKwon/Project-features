import React, { useState } from "react";
import { Stack, Button, Divider, Paper } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Sub = () => {
  const [like, setLike] = useState(false);
  console.log(like);
  return (
    <Stack>
      <Paper sx={{ p: 3, mr: 3, mb: 1.5, height: "1.2rem", width: "1.2rem" }}>
        <Stack
          onClick={() => {
            setLike(!like);
          }}
        >
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
        />
      </Paper>
    </Stack>
  );
};

export default Sub;
