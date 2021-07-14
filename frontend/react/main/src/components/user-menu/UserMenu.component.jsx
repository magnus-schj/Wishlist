import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAllUserInfo } from "../../features/allUsers/allUsers.slice";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
  },
});

const UserMenu = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("mounted");
    dispatch(fetchAllUserInfo());
  }, []);
  return (
    <Container className={classes.root}>
      <Typography variant="h3" color="initial">
        Users
      </Typography>
    </Container>
  );
};

export default UserMenu;
