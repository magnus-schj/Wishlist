import React from "react";
import { useSelector } from "react-redux";

import { Container, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Wish from "../wish/Wish.component";

const useStyles = makeStyles({
  wishList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const WishList = ({ wishes, nameValue }) => {
  const classes = useStyles();
  const hasWishes = wishes.length !== 0;

  const currentUser = useSelector((state) => state.currentUser);
  return (
    <Container maxWidth="xs" className={classes.wishList}>
      {!hasWishes ? (
        <h1>{nameValue} har visst ingen ønsker enda.</h1>
      ) : (
        wishes.map((wish, i) => (
          <Wish key={i} wish={wish} userLoggedIn={false} />
          // <Card key={i}>
          //   <Typography variant="h4" color="initial">
          //     {wish}
          //   </Typography>
          // </Card>
        ))
      )}
    </Container>
  );
};

export default WishList;
