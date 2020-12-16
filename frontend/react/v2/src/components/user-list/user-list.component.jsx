import React from "react";
import { Link } from "react-router-dom";

import "./user-list.styles.css";

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, name: "Magnus" },
        { id: 2, name: "Hanne" },
        { id: 3, name: "Bjorn" },
        { id: 4, name: "Sunniva" },
      ],
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
              <Link to="/wish-page">{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;
