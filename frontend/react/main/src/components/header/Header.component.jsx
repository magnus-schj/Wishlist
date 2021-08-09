import React from "react";

import { auth } from "../../firebase/firebase.utils";

import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "grey",
    width: "100vw",
  },
});

const Header = () => {
  const classes = useStyles();
  const { currentUser } = auth;
  return (
    <div className={classes.root}>
      <h1>Du er logget inn som {currentUser.displayName}</h1>
      <Button
        variant="contained"
        color="default"
        onClick={() => auth.signOut()}
      >
        Logg ut
      </Button>
    </div>
  );
};

export default Header;
