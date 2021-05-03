import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import WishPage from "./pages/wish-page/WishPage.component";
import Main from "./pages/main/Main.component";

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
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Main
              userLoggedIn={userLoggedIn}
              setUserLoggedIn={setUserLoggedIn}
            />
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
              primaryKey={id}
              name={name}
              isLoggedIn={isLoggedIn}
            />
          );
          return <Route exact path={`/${name}`} render={() => component} />;
        })}
      </Switch>
    </div>
  );
};

export default App;
