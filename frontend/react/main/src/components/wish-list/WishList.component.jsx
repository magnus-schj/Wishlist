import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getDisplayedWishList } from "../../features/displayed-wishList/displayedWishList.slice";

import { db } from "../../firebase/firebase.utils";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "grey",
  },
});

const WishList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const displayedWishList = useSelector((state) => state.displayedWishList);
  const { uid } = displayedWishList;
  const [wishes, setWishes] = useState(null);

  useEffect(() => {
    let unsubscribe = () => {};

    // real-time listener for displayed wishlist
    if (uid) {
      unsubscribe = db
        .collection(`wishLists/${uid}/wishes`)
        .onSnapshot((querySnapshot) => {
          const queryWishes = [];
          querySnapshot.forEach((doc) => {
            queryWishes.push({ ...doc.data(), id: doc.id });
          });
          console.log("queryWishes:", queryWishes);
          setWishes(queryWishes);
          console.log("wishes:", wishes);
          // dispatch(getDisplayedWishList(data));
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
          {wishes.map((wish) => (
            <li>{wish.wish}</li>
          ))}
        </ul>
      ) : (
        <h1>Laster..</h1>
      )}
    </div>
  );
};

export default WishList;
