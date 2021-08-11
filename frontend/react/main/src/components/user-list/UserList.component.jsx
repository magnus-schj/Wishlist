import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import UserIcon from "../user-icon/UserIcon.component";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90vw",
  },
  header: {
    textAlign: "center",
  },
});

const UserList = () => {
  const classes = useStyles();
  // selectors
  const allUsers = useSelector((state) => state.allUsers);
  const currentUserSlice = useSelector((state) => state.currentUser);

  const dataLoaded = allUsers.loaded && currentUserSlice.loaded;

  // filtered users
  const filteredUsers = allUsers.users.filter(
    (user) => user.uid !== currentUserSlice.userInfo.uid
  );

  return dataLoaded ? (
    <div>
      <h1 className={classes.header}>User list</h1>
      <div className={classes.root}>
        {filteredUsers.map((user, i) => (
          <UserIcon name={user.nameValue} key={i} />
        ))}
      </div>
    </div>
  ) : (
    <h1>Laster...</h1>
  );
};

export default UserList;
