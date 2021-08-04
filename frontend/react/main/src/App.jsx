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
import { Redirect, Route } from "react-router-dom";
import SignUp from "./components/sign-up/SignUp.component";

function App() {
  const dispatch = useDispatch();

  // real-time listener for user information
  db.collection("users").onSnapshot((querySnapshot) => {
    const users = [];
    querySnapshot.forEach((doc) => {
      users.push({ ...doc.data(), uid: doc.id });
    });
    dispatch(updateAllUsers(users));
  });

  // checks if a user is logged in
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

  // sets if a user is on mobile or not
  const matches = useMediaQuery("(max-width: 500px)");

  let headerVariants = {
    largest: "h1",
    large: "h2",
    medium: "h3",
    small: "h4",
    extraSmall: "h5",
  };
  if (matches)
    headerVariants = {
      largets: "h3",
      large: "h4",
      medium: "h5",
      small: "h6",
      extraSmall: "h7",
    };
  const currentUser = useSelector((state) => state.currentUser);
  console.log("here");
  return (
    <>
      <CssBaseline />
      <Container>
        <Route
          exact
          path="/"
          render={() => <SignInAndSignUp headerVariants={headerVariants} />}
        />
        <Route
          exact
          path="/signUp"
          render={() => <SignUp headerVariants={headerVariants} />}
        />
        {/* {currentUser.loaded ? <Redirect to={}} */}
      </Container>
    </>
  );
}

export default App;
