import React from "react";

import { useSelector } from "react-redux";

import WishList from "../wishList/WishList.component";

import { Container, Typography } from "@material-ui/core";

const WishPage = ({ routeProps: { match } }) => {
  const { nameValue } = match.params;

  const userInfo = useSelector((state) =>
    state.allUsers.users.find((user) => user.nameValue === nameValue)
  );
  return (
    <Container>
      {userInfo ? (
        <div>
          <Typography variant="h3" color="initial">
            {nameValue} sin ønskeliste
          </Typography>
          <WishList wishes={userInfo.wishes} nameValue={userInfo.nameValue} />
        </div>
      ) : (
        <Typography variant="h3" color="initial">
          404 Denne siden finnes ikke!
        </Typography>
      )}
    </Container>
  );
};

export default WishPage;
