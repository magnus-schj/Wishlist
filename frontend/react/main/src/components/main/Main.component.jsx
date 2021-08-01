import React from "react";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import SignInAndSignUp from "../signInAndSignUp/SignInAndSignUp.component";

import { Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    margin: "1rem 6rem",
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

  const currentUserSlice = useSelector((state) => state.currentUser);
  const allUsersSlice = useSelector((state) => state.allUsers);

  const { userInfo } = currentUserSlice;

  console.log("currentUserSlice:", currentUserSlice);
  // const userLoggedIn = allUsersSlice.users.find(
  //   (user) => user.uid === currentUserSlice.userInfo.uid
  // );
  // console.log("name:", userLoggedIn);

  // let userLoggedIn;
  // if (currentUserSlice.userInfo) {
  //   userLoggedIn = allUsers.users.find((user) => user.email === userInfo.email);
  // }

  // let name;
  // userLoggedIn ? (name = userLoggedIn.nameValue) : (name = "");

  const renderNotLoaded = () => {
    if (!currentUserSlice.loaded) {
      return (
        <Typography variant="h3" color="initial">
          Laster...
        </Typography>
      );
    }
    return <SignInAndSignUp />;
  };

  const renderLoggedIn = () => {
    if (currentUserSlice.loaded && allUsersSlice.loaded) {
      const userLoggedIn = allUsersSlice.users.find(
        (user) => user.uid === currentUserSlice.userInfo.uid
      );
      console.log("userLoggedIn:", userLoggedIn);
      return (
        <div>
          <h1>Du er logget inn som {userLoggedIn.nameValue}</h1>
          <Button variant="text" color="default" onClick={() => auth.signOut()}>
            Logg ut
          </Button>
        </div>
      );
    }
  };
  return (
    <Container className={classes.root}>
      <Typography variant="h1" color="initial">
        Velkommen til en ny ønskeliste!
      </Typography>
      {userInfo ? renderLoggedIn() : renderNotLoaded()}
    </Container>
  );
};

export default Main;
