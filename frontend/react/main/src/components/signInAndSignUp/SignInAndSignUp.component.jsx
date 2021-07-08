import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../../features/currentUser/currentUser.slice";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import { Container, Button } from "@material-ui/core";

const SignInAndSignUp = () => {
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
    <Container className="">
      {currentUser ? (
        <Button
          variant="contained"
          color="primary"
          onClick={() => auth.signOut()}
        >
          Sign out
        </Button>
      ) : (
        <Button variant="contained" color="primary" onClick={signInWithGoogle}>
          Sign in with google
        </Button>
      )}
    </Container>
  );
};

export default SignInAndSignUp;
