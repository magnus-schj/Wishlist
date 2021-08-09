import React from "react";
import { useSelector } from "react-redux";

const UserList = () => {
  const allUsers = useSelector((state) => state.allUsers);
  return allUsers.loaded ? (
    <div>
      <h1>User list</h1>
    </div>
  ) : (
    <h1>Laster...</h1>
  );
};

export default UserList;
