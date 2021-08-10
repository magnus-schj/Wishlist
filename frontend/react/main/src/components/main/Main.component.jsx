import React from "react";

import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";
import { Container, Button } from "@material-ui/core";
import SignedIn from "../signed-in/SignedIn.component";

const Main = ({ headerVariants }) => {
  const currentUserSlice = useSelector((state) => state.currentUser);
  const allUsers = useSelector((state) => state.allUsers);
  const renderLoggedOut = () => {
    if (!allUsers.loaded) {
      return <div></div>;
    }
    return <SignInAndSignUp headerVariants={headerVariants} />;
  };
  return (
    <Container>
      {currentUserSlice.loaded ? <SignedIn /> : renderLoggedOut()}
    </Container>
  );
};

export default Main;
