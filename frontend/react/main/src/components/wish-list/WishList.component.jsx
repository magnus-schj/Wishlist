import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase/firebase.utils";

import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "grey",
    minWidth: "100vw",
    minHeight: "53vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    minWidth: "50vw",
    padding: "1rem",
  },
}));

const WishList = () => {
  const classes = useStyles();
  const displayedWishList = useSelector((state) => state.displayedWishList);

  // name and uid stored in redux
  const { uid, name } = displayedWishList;

  const [wishes, setWishes] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    let unsubscribe = () => {
      // this is intentional, unsubscribe must be a function when the component umounts, therefore it must be defined at least at this scope
    };

    // real-time listener for displayed wishlist
    if (uid) {
      unsubscribe = db
        .collection(`wishLists/${uid}/wishes`)
        .onSnapshot((querySnapshot) => {
          const queryWishes = [];
          querySnapshot.forEach((doc) => {
            queryWishes.push({ ...doc.data(), id: doc.id });
          });
          setWishes(queryWishes);
          setIsEmpty(querySnapshot.empty);
        });
    }
    return () => {
      unsubscribe();
    };
  }, [uid]);

  const renderWishList = () => {
    if (isEmpty) {
      return <h1>{name} har visst ingen ønsker enda.</h1>;
    }
    return (
      <Paper className={classes.paper}>
        <List className={classes.list}>
          {wishes.map((wish, i) => (
            <ListItem key={i}>
              <ListItemText primary={wish.wish} />
            </ListItem>
          ))}
        </List>
      </Paper>
    );
  };

  return (
    <div className={classes.root}>
      {wishes ? (
        renderWishList()
      ) : (
        <div>
          <h1>Personen du trykker på sin ønskeliste vil dukke opp her</h1>
        </div>
      )}
    </div>
  );
};

export default WishList;
