import React from "react";
import { useSelector } from "react-redux";
import UserIcon from "../user-icon/UserIcon.component";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "25vh",
    width: "100vw",
  },
  listWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90vw",
    margin: "auto",
    maxHeight: "23vh",
    overflow: "scroll",
  },
  header: {
    textAlign: "center",
  },
}));

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
    <div className={classes.root}>
      <h1 className={classes.header}>User list</h1>
      <div className={classes.listWrapper}>
        {filteredUsers.map((user, i) => (
          <UserIcon name={user.nameValue} key={i} uid={user.uid} />
        ))}
      </div>
    </div>
  ) : (
    <h1>Laster...</h1>
  );
};

export default UserList;
