import React from "react";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";

import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: "1rem 5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 1",
  },
});
const Main = () => {
  const classes = useStyles();

  const currentUser = useSelector((state) => state.currentUser);
  const { userInfo } = currentUser;
  return (
    <Container className={classes.root}>
      <Typography variant="h1" color="initial">
        Main Page!
      </Typography>
      {userInfo ? (
        <div>
          <h1>Du er logget inn!</h1>
          <Button variant="text" color="default" onClick={() => auth.signOut()}>
            Logg ut
          </Button>
        </div>
      ) : (
        <SignInAndSignUp />
      )}
    </Container>
  );
};

export default Main;
