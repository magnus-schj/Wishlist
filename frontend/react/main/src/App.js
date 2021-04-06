import { useState } from "react";
import { Link, Route } from "react-router-dom";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import MOCK_DATA from "./assets/MockData";
import WishPage from "./pages/wish-page/WishPage.component";
import Main from "./pages/main/Main.component";

const App = () => {
  const [userLoggedIn, setUserLoggedIn] = useState(undefined);
  const [mockData, setMockData] = useState(MOCK_DATA);
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
          <Main
            userLoggedIn={userLoggedIn}
            setUserLoggedIn={setUserLoggedIn}
            mockData={mockData}
          />
        )}
      />
      {MOCK_DATA.map(({ id, name, wishes }) => {
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
            setMockData={setMockData}
          />
        );
        return <Route exact path={`/${name}`} render={() => component} />;
      })}
    </div>
  );
};

export default App;
