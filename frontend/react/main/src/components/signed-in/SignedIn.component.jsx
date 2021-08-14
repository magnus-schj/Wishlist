import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentWishList } from "../../features/ownWishList/ownWishList.slice";

import { auth, db } from "../../firebase/firebase.utils";

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
    minHeight: "20vh",
  },
});

const SignedIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { currentUser } = auth;

  const [ownList, setOwnList] = useState(false);

  // real-time listener for current user:
  db.collection(`wishLists/${currentUser.uid}/wishes`).onSnapshot(
    (querySnapshot) => {
      const queryWishes = [];
      querySnapshot.forEach((doc) =>
        queryWishes.push({ ...doc.data(), id: doc.id })
      );
      const data = { uid: currentUser.uid, wishes: queryWishes };
      dispatch(setCurrentWishList(data));
    }
  );

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
          onChange={(e) => setOwnList(e.target.checked)}
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
