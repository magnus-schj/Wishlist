import { Link, Route } from "react-router-dom";

import "./App.css";

import UserMenu from "./components/user-menu/UserMenu.component";
import Main from "./pages/main/Main.component";
import WishPage from "./pages/wish-page/WishPage.component";
const App = () => {
  return (
    <div className="App">
      <UserMenu />
      <div className="header">
        <Link to="/">
          <h1>Ønskelister</h1>
        </Link>
      </div>
      <Route exact path="/" component={Main} />
      <Route
        exact
        path="/:userID"
        render={(routeProps) => <WishPage routeProps={routeProps} />}
      />
    </div>
  );
};

export default App;
