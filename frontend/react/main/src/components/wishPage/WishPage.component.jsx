import React from "react";

import { useSelector } from "react-redux";

import WishList from "../wishList/WishList.component";

import { Container, Typography } from "@material-ui/core";

const WishPage = ({ routeProps: { match } }) => {
  const { nameValue } = match.params;

  const userInfo = useSelector((state) =>
    state.allUsers.users.find((user) => user.nameValue === nameValue)
  );
  const userLoggedIn = useSelector((state) => state.currentUser.loaded);
  const { wishes } = userInfo;
  const hasWishes = wishes.length != 0;

  const renderWishList = () => {
    if (userLoggedIn) {
      // ! Wishlist with user logged in
      // return <WishList {...userInfo} />;
    }
    //  ! Wishlist with user not logged in
    // return <h1>{nameValue} har visst ingen ønsker enda.</h1>;
  };
  return (
    <Container>
      {userInfo ? (
        <div>
          <Typography variant="h3" color="initial">
            {nameValue} sin ønskeliste
          </Typography>
          {renderWishList()}
          {/* <WishList wishes={userInfo.wishes} nameValue={userInfo.nameValue} /> */}
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
