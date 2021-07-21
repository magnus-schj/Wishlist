import React from "react";

import { useSelector } from "react-redux";

import { Container, Typography } from "@material-ui/core";

const WishPage = ({ routeProps: { match } }) => {
  const { nameValue } = match.params;

  const userInfo = useSelector((state) =>
    state.allUsers.users.find((user) => user.nameValue === nameValue)
  );
  console.log("userInfo:", userInfo);
  return (
    <Container>
      {userInfo ? (
        <Typography variant="h3" color="initial">
          {nameValue}'s Wish page
        </Typography>
      ) : (
        <Typography variant="h3" color="initial">
          404 Denne siden finnes ikke!
        </Typography>
      )}
    </Container>
  );
};

export default WishPage;
