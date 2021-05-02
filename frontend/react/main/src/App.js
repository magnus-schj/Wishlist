import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import Main from "./pages/main/Main.component";
import WishPages from "./pages/wish-pages/wish-pages.component";

const App = () => {
  const mockData = useSelector((state) => state.mockData);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  console.log(mockData);
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
      <WishPages />
    </div>
  );
};

export default App;
