import React from "react";

import { Container, Typography } from "@material-ui/core";

const WishPage = ({ routeProps: { match } }) => {
  console.log("props:", match);
  const { nameValue } = match.params;
  return (
    <Container>
      <Typography variant="h3" color="initial">
        {nameValue}'s Wish page
      </Typography>
    </Container>
  );
};

export default WishPage;
