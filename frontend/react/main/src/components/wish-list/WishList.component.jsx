import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "grey",
  },
});

const WishList = ({ wishes }) => {
  const classes = useStyles();
  console.log("wishes:", wishes);
  if (wishes.length !== 0) {
    console.log("bruhh");
  }
  const hasWishes = wishes.length !== 0;
  return (
    <div className={classes.root}>
      {hasWishes ? (
        <ul>
          {wishes.map((wish, i) => (
            <li key={i}>{wish.wish}</li>
          ))}
        </ul>
      ) : (
        <h1>Bruker har ikke noen ønsker ennå.</h1>
      )}
    </div>
  );
};

export default WishList;
