import React from "react";
import { useSelector } from "react-redux";
import UserIcon from "../user-icon/UserIcon.component";

const UserList = () => {
  const allUsers = useSelector((state) => state.allUsers);
  return allUsers.loaded ? (
    <div>
      <h1>User list</h1>
      <ul>
        {allUsers.users.map((user, i) => (
          <UserIcon name={user.nameValue} key={i} />
        ))}
      </ul>
    </div>
  ) : (
    <h1>Laster...</h1>
  );
};

export default UserList;
