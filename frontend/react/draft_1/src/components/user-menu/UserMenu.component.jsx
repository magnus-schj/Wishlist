import React from "react";
import MOCK_DATA from "../../assets/MOCK_DATA";

const UserMenu = () => {
  console.log(MOCK_DATA);
  return (
    <div className="user-menu">
      <h1>Test</h1>
      {MOCK_DATA.map((user) => {
        return <li>{user.name}</li>;
      })}
    </div>
  );
};

export default UserMenu;
