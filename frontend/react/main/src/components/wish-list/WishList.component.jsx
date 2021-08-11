import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "grey",
  },
});

const WishList = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default WishList;
