import React from "react";

import SignIn from "../sign-in/SignIn.component";
import SignUp from "../sign-up/SignUp.component";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

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
const SignInAndSignUp = ({ headerVariants }) => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant={headerVariants.large} color="initial">
        Du er ikke logget inn.
      </Typography>
      <SignIn />
      <Typography variant={headerVariants.medium} color="initial">
        Har du ikke bruker? <Link to="/signUp">Registrer deg her</Link>
      </Typography>
    </Container>
  );
};

export default SignInAndSignUp;
