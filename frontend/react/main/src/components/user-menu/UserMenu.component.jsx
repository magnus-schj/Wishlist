import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserMenu.styles.css";

const UserMenu = () => {
  const userInfo = useSelector((state) => state.userInfo.mockData);
  return (
    <div className="user-menu">
      <h1>Users</h1>
      <div className="user-list">
        <ul>
          {userInfo.map((user) => {
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
};

export default UserMenu;
