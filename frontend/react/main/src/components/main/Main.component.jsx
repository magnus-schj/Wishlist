import React from "react";

import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";
import { Container, Button } from "@material-ui/core";

const Main = ({ headerVariants }) => {
  const { currentUser } = auth;
  const allUsers = useSelector((state) => state.allUsers);

  return (
    <Container>
      {currentUser ? (
        <>
          <h1>Du er logget inn som {currentUser.displayName}</h1>
          <Button
            variant="contained"
            color="default"
            onClick={() => auth.signOut()}
          >
            Logg ut
          </Button>
        </>
      ) : (
        <SignInAndSignUp headerVariants={headerVariants} />
      )}
    </Container>
  );
};

export default Main;
