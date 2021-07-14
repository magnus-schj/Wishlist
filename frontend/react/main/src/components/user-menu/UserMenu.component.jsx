import React from "react";

import { useSelector } from "react-redux";

import { Container, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
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
      <ul>
        {loaded ? (
          users.map((user) => <li>{user.nameValue}</li>)
        ) : (
          <div>Loading...</div>
        )}
      </ul>
    </Container>
  );
};

export default UserMenu;
