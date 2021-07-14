import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./features/currentUser/currentUser.slice";
import { fetchAllUserInfo } from "./features/allUsers/allUsers.slice";

import { auth } from "./firebase/firebase.utils";

import { Route } from "react-router-dom";
import SignInAndSignUp from "./components/signInAndSignUp/SignInAndSignUp.component";
import UserMenu from "./components/user-menu/UserMenu.component";
import Main from "./components/main/Main.component";

import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

  let unsubscribeFromAuth = null;
  useEffect(() => {
    dispatch(fetchAllUserInfo());
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);
  return (
    <>
      <CssBaseline />
      <Container className={classes.root}>
        <UserMenu />
        <Route exact path="/" component={Main} />
        {/* <Container className={classes.contentContainer}>
          <UserMenu />
          <SignInAndSignUp />
        </Container> */}
      </Container>
    </>
  );
}

export default App;
