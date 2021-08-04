import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./features/currentUser/currentUser.slice";
import { updateAllUsers } from "./features/allUsers/allUsers.slice";
import { setMobile } from "./features/styles/styles.slice";
import { auth, db } from "./firebase/firebase.utils";

import SignInAndSignUp from "./components/signInAndSignUp/SignInAndSignUp.component";

import {
  CssBaseline,
  Container,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  // real-time listener for user information
  // db.collection("users").onSnapshot((querySnapshot) => {
  //   const users = [];
  //   querySnapshot.forEach((doc) => {
  //     users.push({ ...doc.data(), uid: doc.id });
  //   });
  //   dispatch(updateAllUsers(users));
  // });

  // mediaquery for checkinbg screen size
  const matches = useMediaQuery("(max-width: 500px)");

  // checks if a user is logged in
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
      // sets if a user is on mobile or not
      dispatch(setMobile(matches));
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [matches]);

  // checks what size we are supposed to have
  const mobile = useSelector((state) => state.styles.mobile);
  let headerVariant = "h1";
  if (mobile) headerVariant = "h3";

  return (
    <>
      <CssBaseline />
      <Container>
        <Route
          path="/"
          render={() => <SignInAndSignUp headerVariant={headerVariant} />}
        />
      </Container>
    </>
  );
}

export default App;
