import React, { useState } from "react";

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
});

const WishReadWrite = ({ initialWish, uid, wid }) => {
  const classes = useStyles();

  const [wish, setWish] = useState(initialWish);
  console.log("ininitalWish:", initialWish);
  return (
    <Card className={classes.root}>
      <CardContent>
        <TextField
          id="wish"
          variant="filled"
          value={wish}
          onChange={(e) => setWish(e.target.value)}
          helperText={wid}
        />
      </CardContent>
      <CardActions>
        <IconButton onClick={() => updateWish(uid, wid, wish)}>
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
