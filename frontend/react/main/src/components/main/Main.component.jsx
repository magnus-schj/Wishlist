import React from "react";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";

import { Container, Typography } from "@material-ui/core";

const Main = () => {
  return (
    <Container>
      <Typography variant="h1" color="initial">
        Main Page!
      </Typography>
      <SignInAndSignUp />
    </Container>
  );
};

export default Main;
