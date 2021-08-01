import React from "react";

import { useSelector } from "react-redux";

import WishList from "../wishList/WishList.component";

import { Container, Typography } from "@material-ui/core";

const WishPage = ({ routeProps: { match } }) => {
  const { nameValue } = match.params;

  const allUsersLoaded = useSelector((state) => state.allUsers.loaded);
  // tries to find a user with a name equal to the url
  const userInfo = useSelector((state) =>
    state.allUsers.users.find((user) => user.nameValue === nameValue)
  );

  // if page not loaded yet, loads somethinbg else than 404
  const renderNotLoaded = () => {
    if (allUsersLoaded && !userInfo) {
      return (
        <Typography variant="h3" color="initial">
          404 denne siden finnes ikke!
        </Typography>
      );
    } else if (!allUsersLoaded) {
      return (
        <Typography variant="h3" color="initial">
          Laster...
        </Typography>
      );
    }
  };

  return (
    <Container>
      {userInfo ? (
        <div>
          <Typography variant="h3" color="initial">
            {nameValue} sin ønskeliste
          </Typography>
          <WishList {...userInfo} />
        </div>
      ) : (
        renderNotLoaded()
      )}
    </Container>
  );
};

export default WishPage;
