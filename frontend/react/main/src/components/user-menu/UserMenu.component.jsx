import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./UserMenu.styles.css";

const UserMenu = ({ mockData }) => (
  <div className="user-menu">
    <h1>Users</h1>
    <div className="user-list">
      <ul>
        {mockData.map((user) => {
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

const mapStateToProps = (state) => state.mockData;

export default connect(mapStateToProps)(UserMenu);
