import React, { useState, useEffect } from "react";

import { deleteWish, updateWish } from "../../firebase/firebase.utils";

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  TextField,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    margin: "0.5rem 0",
    padding: "0.5rem",
    width: "90%",
  },
  suksess: {
    background: "green",
  },
});

const WishReadWrite = ({ initialWish, uid, wid }) => {
  const classes = useStyles();

  const [wish, setWish] = useState(initialWish);

  const [label, setLabel] = useState("");


  useEffect(() => {
    setWish(initialWish);
  }, [initialWish]);


  const handleUpdate = () => {
    updateWish(uid, wid, wish);
    setLabel("Endret!");
    setInterval(() => {
      setLabel("");
    }, 1200);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <TextField
          label="lagret!"
          id={wid}
          value={wish}
          onChange={(e) => setWish(e.target.value)}

          label={label}

        />
      </CardContent>
      <CardActions>
        <IconButton onClick={() => handleUpdate()}>
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => deleteWish(uid, wid)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default WishReadWrite;
