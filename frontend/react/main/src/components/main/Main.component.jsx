import React from "react";

import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";
import { Container, Button } from "@material-ui/core";
import SignedIn from "../signed-in/SignedIn.component";

const Main = ({ headerVariants }) => {
  const { currentUser } = auth;
  const allUsers = useSelector((state) => state.allUsers);

  return (
    <Container>
      {currentUser ? (
        <SignedIn />
      ) : (
        <SignInAndSignUp headerVariants={headerVariants} />
      )}
    </Container>
  );
};

export default Main;
