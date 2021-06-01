import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./UserMenu.styles.css";

const UserMenu = () => {
  const mockData = useSelector((state) => state.mockData.data);
  return (
    <div className="user-menu">
      <h1>Users</h1>
      <div className="user-list">
        <ul>
          {mockData.map((user, index) => {
            return (
              <Link key={index} to={`/${user.name}`}>
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
