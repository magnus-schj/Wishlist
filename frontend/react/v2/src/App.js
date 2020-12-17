import React from "react";

import "./App.css";

import UserList from "./components/user-list/user-list.component";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.page";
import WishPage from "./pages/wishes/wishes.page";
import user_data from "./assets/data/users_data";

const Test = () => <h1>Test</h1>;
const Magnus = () => <h1>Magnus sin ønskeliste</h1>;
const Hanne = () => <h1>Hanne sin ønskeliste</h1>;
const Bjorn = () => <h1>Bjørn sin ønskeliste</h1>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: user_data,
    };
  }

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <UserList />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/sign-in-sign-up" component={SignInSignUp} />
          <Route exact path="/test" component={Test} />
          {users.map((user) => (
            <Route exact path={`/${users.name}`} component={Test} />
          ))}
        </Switch>
      </div>
    );
  }
}

export default App;
