import { useState } from "react";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import MOCK_DATA from "./assets/MockData";
import { Link, Route } from "react-router-dom";
import WishPage from "./pages/wish-page/WishPage.component";
import Main from "./pages/main/Main.component";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(undefined);
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
        render={() => (
          <Main userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        )}
      />
      {MOCK_DATA.map((user) => {
        const component = <WishPage name={user.name} wishes={user.wishes} />;
        return <Route exact path={`/${user.name}`} render={() => component} />;
      })}
    </div>
  );
};

export default App;
