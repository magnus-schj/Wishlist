import React from "react";
import { useSelector } from "react-redux";

import Wish from "../wish/Wish.component";
import AddWish from "../add-wish/AddWish.component";

import { Container, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  wishList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const WishList = ({ wishes, nameValue, uid }) => {
  const classes = useStyles();
  const hasWishes = wishes.length !== 0;

  const userLoggedIn = useSelector((state) => state.currentUser.userInfo);
  let thisUserLoggedIn;
  if (userLoggedIn) {
    thisUserLoggedIn = uid === userLoggedIn.uid;
  }
  const renderWishForm = () => {
    if (thisUserLoggedIn) {
      return <AddWish uid={userLoggedIn.uid} />;
    }
    return null;
  };
  return (
    <Container maxWidth="xs" className={classes.wishList}>
      {!hasWishes ? (
        <h1>{nameValue} har visst ingen ønsker enda.</h1>
      ) : (
        wishes.map((wish, i) => (
          <Wish key={i} wish={wish} userLoggedIn={thisUserLoggedIn} uid={uid} />
        ))
      )}
      {renderWishForm()}
    </Container>
  );
};

export default WishList;
