import React, { useState } from "react";

import { useSelector } from "react-redux";

import { TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addWish } from "../../firebase/firebase.utils";

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const OwnList = () => {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const currentUser = useSelector((state) => state.currentUser);
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
    </div>
  );
};

export default OwnList;
