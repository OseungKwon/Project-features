import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Typography,
  List,
  Grid,
  ListItem,
  ListItemText,
  Paper,
  Box
} from "@material-ui/core";
import { Icon } from "@iconify/react";

import heartOutlined from "@iconify/icons-ant-design/heart-outlined";
import commentOutlined from "@iconify/icons-ant-design/comment-outlined";

import { useRouter } from "next/router";
// redux
import { useDispatch } from "react-redux";
import { addViewCount } from "src/redux/slices/qna";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const topTags = [
  {
    key: "android"
  },
  {
    key: "backend"
  },
  {
    key: "c/c++"
  },
  {
    key: "css"
  }
];

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
    //backgroundColor: theme.palette.background.paper
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(3)
  },

  listItem: {
    display: "inline-block",
    alignItems: "center",
    minHeight: "50px",
    lineHeight: "25px",

    // marginTop: '10px',
    backgroundColor: "white"
  },
  listItemText: {
    // maxWidth: '500px',
    fontSize: "20px"
  },
  itemBox: {
    textAlign: "center",
    fontSize: "1.1rem",
    display: "block",
    marginTop: "5px"
  }
}));

const RootStyles = styled("div")(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor: theme.palette.background.neutral
}));

export default function QnaTable({ list }) {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const dispatch = useDispatch();
  const router = useRouter();
  const classes = useStyles();

  const onListItemClick = (e, qnaId) => {
    e.preventDefault();
    dispatch(addViewCount(qnaId));
    router.push(`/QnA/qnaPage`);
  };
  return (
    <>
      <RootStyles>
        <Grid container spacing={2}>
          <Grid item xs={2} sx={{ m: 4 }}>
            <Box sx={{ width: "20%", position: "fixed" }}>
              <List sx={{ width: "80%" }}>
                <ListItem
                  button
                  selected={selectedIndex === 0}
                  onClick={event => handleListItemClick(event, 0)}
                >
                  홈
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 1}
                  onClick={event => handleListItemClick(event, 1)}
                >
                  팔로잉
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 2}
                  onClick={event => handleListItemClick(event, 2)}
                >
                  보관함
                </ListItem>
                <ListItem
                  button
                  selected={selectedIndex === 3}
                  onClick={event => handleListItemClick(event, 3)}
                >
                  확인한 글
                </ListItem>
              </List>
              <Typography
                sx={{ mx: 2, mt: 2, fontWeight: "bold", color: "gray" }}
              >
                Top tags
              </Typography>
              <List>
                {topTags.map(tag => (
                  <ListItem button>{tag.key}</ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <List className={classes.root}>
              <Typography variant="h4" sx={{ ml: 2, mt: 4, color: "gray" }}>
                전체 Q&A
              </Typography>

              {list.map((qnaInfo, index) => {
                const labelId = `qna-${index}`;
                return (
                  <>
                    <Grid container sx={{ py: 3, textAlign: "center" }}>
                      <ListItem
                        className={classes.listItem}
                        key={index}
                        role={undefined}
                        dense
                        button
                        onClick={e => onListItemClick(e, qnaInfo.qnaId)}
                        sx={{ borderRadius: 1, p: 3 }}
                      >
                        <ListItem>
                          <Avatar
                            style={{ marginRight: 10 }}
                            alt="Remy Sharp"
                            src={qnaInfo.avartarUrl}
                          />
                          <ListItemText primary={qnaInfo.name} />
                        </ListItem>
                        <ListItem>
                          <Typography variant="h4" gutterBottom>
                            {qnaInfo.title}
                          </Typography>
                        </ListItem>

                        <ListItem>
                          <ListItemText
                            className={classes.listItemText}
                            id={labelId}
                            primary={qnaInfo.content}
                          />
                        </ListItem>
                        <ListItem>
                          <Typography variant="subtitle1" gutterBottom>
                            {qnaInfo.Tags.map(tag => tag.key)}
                          </Typography>
                        </ListItem>
                        <ListItem>
                          <div style={{ marginLeft: 5 }}>
                            <Icon
                              icon={heartOutlined}
                              width={25}
                              height={25}
                              color="#676673"
                              style={{ position: "relative", top: 6 }}
                            />
                            <span style={{ paddingLeft: 5 }}>
                              {qnaInfo.likes}명 좋아요
                            </span>
                          </div>
                          <div style={{ marginLeft: "5rem" }}>
                            <Icon
                              icon={commentOutlined}
                              width={25}
                              height={25}
                              color="#676673"
                              style={{ position: "relative", top: 6 }}
                            />
                            <span style={{ paddingLeft: 5 }}>
                              {qnaInfo.comments}명 코멘트
                            </span>
                          </div>
                        </ListItem>
                      </ListItem>
                    </Grid>
                  </>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </RootStyles>
    </>
  );
}
