import React from "react";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";
import { Container } from "@material-ui/core";

const Main = ({ headerVariants }) => {
  return (
    <Container>
      <SignInAndSignUp headerVariants={headerVariants} />
    </Container>
  );
};

export default Main;
