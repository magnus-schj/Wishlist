import React from "react";

import { Button, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    borderRadius: "90px",
    height: "5rem",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: 0,
    padding: 0,
  },
});

const UserIcon = ({ name }) => {
  const classes = useStyles();
  return (
    <ButtonBase variant="contained" className={classes.root}>
      <h1 className={classes.header}>{name.charAt(0)}</h1>
      <h4>{name}</h4>
    </ButtonBase>
  );
};

export default UserIcon;
