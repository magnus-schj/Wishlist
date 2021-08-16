import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setCurrentWishList } from "../../features/ownWishList/ownWishList.slice";

import { auth, db } from "../../firebase/firebase.utils";

import UserList from "../user-list/UserList.component";
import WishList from "../wish-list/WishList.component";
import OwnList from "../own-list/OwnList.component";

import {
  AppBar,
  Button,
  Drawer,
  Switch,
  Toolbar,
  IconButton,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import DrawerContent from "../drawer-content/DrawerContent.component";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    alignItems: "space-around",
  },
  title: {
    flexGrow: 1,
  },
  list: {
    minWidth: "150px",
    background: theme.palette.primary.dark,
  },
}));

const SignedIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { currentUser } = auth;

  const [ownList, setOwnList] = useState(false);
  const [drawer, setDrawer] = useState(false);

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
      {/* AppBar displaying who is logged in and a side menu  */}
      <AppBar className={classes.header}>
        <Toolbar>
          <IconButton size="small" onClick={() => setDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={drawer}
            onClose={() => setDrawer(false)}
            PaperProps={{ className: classes.list }}
          >
            <DrawerContent />
          </Drawer>

          <Typography
            variant="subtitle1"
            color="initial"
            className={classes.title}
          >
            Logget inn som {currentUser.displayName}
          </Typography>

          <Switch
            value=""
            checked={ownList}
            onChange={(e) => setOwnList(e.target.checked)}
            inputProps={{ "aria-label": "primary label" }}
          />
        </Toolbar>
      </AppBar>

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
