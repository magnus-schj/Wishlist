import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import WishPage from "./pages/wish-page/WishPage.component";
import Main from "./pages/main/Main.component";

const App = () => {
  const mockData = useSelector((state) => state.mockData.mockData);

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
        render={() => (
          <Main userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        )}
      />
      {mockData.map(({ id, name, wishes }) => {
        let isLoggedIn = false;
        if (userLoggedIn) {
          isLoggedIn = userLoggedIn.id === id;
        }
        const component = (
          <WishPage
            key={name}
            name={name}
            wishes={wishes}
            isLoggedIn={isLoggedIn}
          />
        );
        return <Route exact path={`/${name}`} render={() => component} />;
      })}
    </div>
  );
};

export default App;
