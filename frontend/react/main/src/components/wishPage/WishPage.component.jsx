import React from "react";

import { Container, Typography } from "@material-ui/core";

const WishPage = ({ routeProps }) => {
  console.log("props:", routeProps);
  return (
    <Container>
      <Typography variant="h3" color="initial">
        Wish page
      </Typography>
    </Container>
  );
};

export default WishPage;
