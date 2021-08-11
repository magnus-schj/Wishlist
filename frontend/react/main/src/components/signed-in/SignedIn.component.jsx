import React, { useState } from "react";

import { auth } from "../../firebase/firebase.utils";

import UserList from "../user-list/UserList.component";
import WishList from "../wish-list/WishList.component";
import OwnList from "../own-list/OwnList.component";

import { Button, Switch } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "grey",
    width: "100vw",
  },
});

const SignedIn = () => {
  const classes = useStyles();

  const { currentUser } = auth;

  const [ownList, setownList] = useState(false);

  const handleChange = (e) => {};
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>Du er logget inn som {currentUser.displayName}</h1>
        <Button
          variant="contained"
          color="default"
          onClick={() => auth.signOut()}
        >
          Logg ut
        </Button>
        <Switch
          value=""
          checked={ownList}
          onChange={(e) => setownList(e.target.checked)}
          inputProps={{ "aria-label": "primary label" }}
        />
      </div>
      {ownList ? (
        <OwnList />
      ) : (
        <>
          <UserList />
          <WishList />
        </>
      )}
    </div>
  );
};

export default SignedIn;
