import React from "react";

import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginLeft: 0,
  },
});

const UserMenu = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="h3" color="initial">
        Users
      </Typography>
    </Container>
  );
};

export default UserMenu;
