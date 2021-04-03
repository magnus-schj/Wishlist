import "./App.css";
import UserMenu from "./components/user-menu/UserMenu.component";
import MOCK_DATA from "./assets/MockData";
import { Link, Route } from "react-router-dom";
import WishPage from "./pages/wish-page/WishPage.component";
import Main from "./pages/main/Main.component";

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
      {MOCK_DATA.map((user) => {
        const component = <WishPage name={user.name} wishes={user.wishes} />;
        return <Route exact path={`/${user.name}`} render={() => component} />;
      })}
    </div>
  );
};

export default App;
