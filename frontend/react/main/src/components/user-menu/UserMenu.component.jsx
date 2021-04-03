import React from "react";
import { Link } from "react-router-dom";
import MOCK_DATA from "../../assets/MockData";
import "./UserMenu.styles.css";

const UserMenu = () => (
  <div className="user-menu">
    <h1>Users</h1>
    <div className="user-list">
      <ul>
        {MOCK_DATA.map((user) => {
          return (
            <Link to={`/${user.name}`}>
              <li>{user.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  </div>
);

export default UserMenu;
