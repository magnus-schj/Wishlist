import React from "react";

import { deleteWish } from "../../firebase/firebase.utils";

import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

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

const WishReadWrite = ({ wish, uid, wid }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" color="initial">
          {wish}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete" onClick={() => deleteWish(uid, wid)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default WishReadWrite;
