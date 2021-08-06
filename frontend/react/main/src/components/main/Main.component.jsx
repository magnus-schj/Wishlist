import React from "react";

import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";
import { Container, Button } from "@material-ui/core";

const Main = ({ headerVariants }) => {
  const currentUser = useSelector((state) => state.currentUser);
  const allUsers = useSelector((state) => state.allUsers);
  console.log("here");
  return (
    <Container>
      {currentUser.loaded ? (
        <>
          <h1>Du er logget inn</h1>
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
