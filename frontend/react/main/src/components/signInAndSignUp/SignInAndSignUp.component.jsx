import React from "react";

import SignIn from "../sign-in/SignIn.component";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "2rem 0",
  },
});
const SignInAndSignUp = ({ headerVariant }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant={headerVariant} color="initial">
        Du er ikke logget inn.
      </Typography>
      <SignIn />
    </Container>
  );
};

export default SignInAndSignUp;
