import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase/firebase.utils";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "grey",
    minWidth: "100vw",
    minHeight: "53vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const WishList = () => {
  const classes = useStyles();
  const displayedWishList = useSelector((state) => state.displayedWishList);
  const { uid } = displayedWishList;
  const [wishes, setWishes] = useState(null);

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
        });
    }
    return () => {
      unsubscribe();
    };
  }, [uid]);

  return (
    <div className={classes.root}>
      {wishes ? (
        <ul>
          {wishes.map((wish, i) => (
            <li key={i}>{wish.wish}</li>
          ))}
        </ul>
      ) : (
        <div>
          <h1>Personen du trykker på sin ønskeliste vil dukke opp her</h1>
        </div>
      )}
    </div>
  );
};

export default WishList;
