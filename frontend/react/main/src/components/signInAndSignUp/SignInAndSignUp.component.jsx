import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import SignIn from "../sign-in/SignIn.component";
import SignUp from "../sign-up/SignUp.component";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  signInWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SignInAndSignUp = () => {
  const classes = useStyles();
  const currentUser = useSelector((state) => state.currentUser.userInfo);

  return (
    <Container className={classes.root}>
      <Typography variant="h2" color="initial">
        Du er for øyeblikket logget inn.
      </Typography>
      <Container className={classes.signInWrapper}>
        <SignIn />
        <SignUp />
      </Container>
    </Container>
  );
};

export default SignInAndSignUp;
