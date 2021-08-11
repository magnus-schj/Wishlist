import React from "react";

import { auth } from "../../firebase/firebase.utils";

import Header from "../header/Header.component";
import UserList from "../user-list/UserList.component";

import { makeStyles } from "@material-ui/core/styles";
import WishList from "../wish-list/WishList.component";

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
  return (
    <div className={classes.root}>
      <Header />
      <UserList />
      <WishList />
    </div>
  );
};

export default SignedIn;
