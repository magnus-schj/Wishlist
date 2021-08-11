import React from "react";

import { auth } from "../../firebase/firebase.utils";

import Header from "../header/Header.component";
import UserList from "../user-list/UserList.component";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SignedIn = () => {
  const classes = useStyles();
  const { currentUser } = auth;
  return (
    <div className={classes.root}>
      <Header />
      <UserList />
    </div>
  );
};

export default SignedIn;