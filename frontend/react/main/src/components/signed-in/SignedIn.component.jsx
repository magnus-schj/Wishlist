import React from "react";

import { auth } from "../../firebase/firebase.utils";

import { Container } from "@material-ui/core";

const SignedIn = () => {
  const { currentUser } = auth;
  return (
    <Container>
      <h1>Du er logget inn som {currentUser.displayName}</h1>
      <Button
        variant="contained"
        color="default"
        onClick={() => auth.signOut()}
      >
        Logg ut
      </Button>
    </Container>
  );
};

export default SignedIn;
