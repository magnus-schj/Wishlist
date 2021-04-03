import React from "react";
import MOCK_DATA from "../../assets/MOCK_DATA";
import "./UserMenu.styles.css";

const UserMenu = () => {
  console.log(MOCK_DATA);
  return (
    <div className="user-menu">
      <h1>Test</h1>
      <ul>
        {MOCK_DATA.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserMenu;
