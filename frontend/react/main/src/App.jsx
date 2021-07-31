import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./features/currentUser/currentUser.slice";
import {
  fetchAllUserInfo,
  updateAllUsers,
} from "./features/allUsers/allUsers.slice";

import { auth, db } from "./firebase/firebase.utils";

import { Route } from "react-router-dom";
import UserMenu from "./components/user-menu/UserMenu.component";
import Main from "./components/main/Main.component";
import WishPage from "./components/wishPage/WishPage.component";

import { CssBaseline, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
    marginLeft: 0,
  },
});

function App() {
  const dispatch = useDispatch();
  const classes = useStyles();

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
    // dispatch(fetchAllUserInfo());
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
        <div>
          <Route exact path="/" component={Main} />
          <Route
            exact
            path="/:nameValue"
            render={(routeProps) => <WishPage routeProps={routeProps} />}
          />
        </div>
      </Container>
    </>
  );
}

export default App;
