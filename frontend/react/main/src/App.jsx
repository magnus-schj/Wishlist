import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { auth } from "./firebase/firebase.utils";
import { setCurrentUser } from "./features/currentUser/currentUser.slice";

import SignInAndSignUp from "./components/signInAndSignUp/SignInAndSignUp.component";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.userInfo);

  let unsubscribeFromAuth = null;
  useEffect(() => {
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
      <Container className="App">
        <h1>App</h1>
        <SignInAndSignUp />
      </Container>
    </>
  );
}

export default App;
