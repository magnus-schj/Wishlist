import React from "react";
import { Link } from "react-router-dom";
import user_data from "../../assets/data/users_data";

import "./user-list.styles.css";

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: user_data,
    };
  }
  render() {
    const { users } = this.state;

    return (
      <div className="user-list">
        <h1>User list</h1>
        <ul>
          {users.map((user) => (
            <li>
              <Link to={`${user.name}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
