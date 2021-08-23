import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    width: "100vw",
    padding: "0.5rem",
    textAlign: "center",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <small>Utviklet av Magnus Schjølset Solberg</small>
    </footer>
  );
};

export default Footer;
