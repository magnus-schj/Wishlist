import React from "react";
import { useSelector } from "react-redux";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem 5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1",
  },
});
const Main = () => {
  const classes = useStyles();

  const userLoggedIn = useSelector((state) => state.currentUser);
  return (
    <Container className={classes.root}>
      <Typography variant="h1" color="initial">
        Main Page!
      </Typography>
      <SignInAndSignUp />
    </Container>
  );
};

export default Main;
