import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import Main from "./pages/main/Main.component";
import WishPage from "./pages/wish-page/WishPage.component";
const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className="App">
      <UserMenu />
      <div className="header">
        <Link to="/">
          <h1>Ønskelister</h1>
        </Link>
      </div>
      <Route
        exact
        path="/"
        render={(routeProps) => (
          <Main
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            routeProps={routeProps}
          />
        )}
      />
      <Route exact path="/:userID" component={WishPage} />
    </div>
  );
};

export default App;
