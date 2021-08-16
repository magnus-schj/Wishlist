import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase/firebase.utils";

import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
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
    minWidth: "90vw",
    padding: "1rem",
    margin: "1rem",
  },
  header: {
    textAlign: "center",
  },
}));

const WishList = () => {
  const classes = useStyles();
  const displayedWishList = useSelector((state) => state.displayedWishList);

  // name and uid stored in redux
  const { uid, name } = displayedWishList;

  // state for all the wishes, and other data:
  const [wishes, setWishes] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);

  // time-data from the wishList document is stored here
  const [timeData, setTimeData] = useState(null);

  useEffect(() => {
    // real-time listener for displayed wishlist
    if (uid) {
      db.collection(`wishLists/${uid}/wishes`).onSnapshot((querySnapshot) => {
        const queryWishes = [];
        querySnapshot.forEach((doc) => {
          queryWishes.push({ ...doc.data(), id: doc.id });
        });
        setWishes(queryWishes);
        setIsEmpty(querySnapshot.empty);
      });
      db.doc(`wishLists/${uid}`).onSnapshot((querySnapshot) => {
        const data = querySnapshot.data();
        setTimeData(data);
      });
    }
  }, [uid]);

  const renderUpdated = () => {
    if (!timeData) {
      return (
        <Typography variant="subtitle1" color="textSecondary">
          Oppdatert: (ikke registrert)
        </Typography>
      );
    }

    // converts the date to string and puts it under the header
    const toDate = timeData.updated.toDate();
    return (
      <Typography
        className={classes.header}
        variant="subtitle1"
        color="textSecondary"
      >
        Oppdatert {toDate.toDateString()}
      </Typography>
    );
  };

  const renderWishList = () => {
    if (isEmpty) {
      return <h1>{name} har visst ingen ønsker enda.</h1>;
    }
    return (
      <Paper className={classes.paper}>
        <h2 className={classes.header}>{name} sine ønsker</h2>
        {renderUpdated()}
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
