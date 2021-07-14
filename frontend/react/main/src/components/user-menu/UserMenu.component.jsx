import React from "react";

import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import {
  Container,
  Typography,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "fixed",
    left: 0,
    top: 0,
    height: "100vh",
    width: "10vw",
    paddingTop: "5vh",
  },
});

const UserMenu = () => {
  const classes = useStyles();

  const { loaded, users } = useSelector((state) => state.allUsers);
  return (
    <Container className={classes.root}>
      <Typography variant="h3" color="initial">
        Users
      </Typography>
      <List component="nav">
        {loaded ? (
          users.map((user, i) => (
            <ListItem key={i}>
              <Link to={`/${user.nameValue}`}>
                <Button>{user.nameValue}</Button>
              </Link>
            </ListItem>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </List>
    </Container>
  );
};

export default UserMenu;
