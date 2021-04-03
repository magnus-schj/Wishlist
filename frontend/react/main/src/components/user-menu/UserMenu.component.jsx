import React from "react";
import MOCK_DATA from "../../assets/MockData";
import "./UserMenu.styles.css";

const UserMenu = () => (
  <div className="user-menu">
    <h1>Users</h1>
    <div className="user-list">
      <ul>
        {MOCK_DATA.map((user) => {
          return <li>{user.name}</li>;
        })}
      </ul>
    </div>
  </div>
);

export default UserMenu;
