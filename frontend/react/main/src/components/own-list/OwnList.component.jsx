import React, { useState } from "react";

import { useSelector } from "react-redux";

import { db, addWish } from "../../firebase/firebase.utils";

import WishReadWrite from "../wish/WishReadWrite.component";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "1rem",
  },
  header: {
    textAlign: "center",
  },
});

const OwnList = () => {
  // local state and classes
  const classes = useStyles();
  const [value, setValue] = useState("");

  const currentUser = useSelector((state) => state.currentUser);
  const ownWishList = useSelector((state) => state.ownWishList);

  //function for adding a wish, see firebase.utils for the addWish function
  const handleClick = async () => {
    await addWish(currentUser.userInfo.uid, value);
    setValue("");
  };

  return (
    <div>
      <h1 className={classes.header}>Din liste</h1>
      <form className={classes.form}>
        <TextField
          id="wish-input"
          label="Legg til ønske..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit
        </Button>
      </form>
      <div className={classes.list}>
        {ownWishList.wishes.map((wish, i) => {
          console.log("wish:", wish);
          return (
            <WishReadWrite
              key={i}
              initialWish={wish.wish}
              uid={currentUser.userInfo.uid}
              wid={wish.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OwnList;
