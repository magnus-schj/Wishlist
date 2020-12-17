import React from "react";
import { Route, Switch } from "react-router-dom";
import user_data from "../../assets/data/users_data";

// import WishList from "../../components/wish-list/wish-list.component";

const Test = () => <h1>Users</h1>;

class WishPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: user_data,
    };
  }
  render() {
    const { users } = this.state;

    return (
      <div className="wishes page">
        {users.map((user) => (
          <Route exact path={`/${users.name}`} component={Test} />
        ))}
      </div>
    );
  }
}

export default WishPage;
