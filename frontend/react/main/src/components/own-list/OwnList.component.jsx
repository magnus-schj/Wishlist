import React, { useState } from "react";

import { useSelector } from "react-redux";

import { db } from "../../firebase/firebase.utils";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addWish } from "../../firebase/firebase.utils";

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
  },
});

const OwnList = () => {
  // local state and classes
  const classes = useStyles();
  const [value, setValue] = useState("");

  const currentUser = useSelector((state) => state.currentUser);
  const currentWishList = useSelector((state) => state.currentWishList);

  //function for adding a wish, see firebase.utils for the addWish function
  const handleClick = async () => {
    try {
      await addWish(currentUser.userInfo.uid, value);
    } catch (error) {
      console.log(error);
    }
    setValue("");
  };
  return (
    <div>
      <h1>Din liste</h1>
      <form className={classes.form}>
        <TextField
          id="wish"
          label="Legg til ønske..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          Submit
        </Button>
      </form>
      {/* <h2>Rediger din liste</h2> */}
      <div className={classes.list}>
        <ul>
          {currentWishList.wishes.map((wish, i) => (
            <li key={i}>{wish.wish}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OwnList;
