import React from "react";
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
  const allUsers = useSelector((state) => state.allUsers);
  return allUsers.loaded ? (
    <div>
      <h1 className={classes.header}>User list</h1>
      <div className={classes.root}>
        {allUsers.users.map((user, i) => (
          <UserIcon name={user.nameValue} key={i} />
        ))}
      </div>
    </div>
  ) : (
    <h1>Laster...</h1>
  );
};

export default UserList;
