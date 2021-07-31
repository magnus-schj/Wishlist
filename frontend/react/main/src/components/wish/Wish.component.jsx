import React, { useState } from "react";

import { Card, Typography, TextField, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Wish = ({ wish, userLoggedIn }) => {
  const classes = useStyles();
  const [value, setValue] = useState(wish);
  return (
    <Card>
      {userLoggedIn ? (
        <form className={classes.form}>
          <TextField
            id="wish"
            label=""
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </form>
      ) : (
        <Typography variant="h4" color="initial">
          {wish}
        </Typography>
      )}
    </Card>
  );
};

export default Wish;
