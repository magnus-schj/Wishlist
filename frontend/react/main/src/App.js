import "./App.css";
import UserMenu from "./components/user-menu/UserMenu.component";
import MOCK_DATA from "./assets/MockData";
import { Route } from "react-router-dom";
import WishList from "./components/wish-list/WishList.component";

const App = () => {
  return (
    <div className="App">
      <UserMenu />
      <h1>Ønskelister</h1>
      {MOCK_DATA.map((user) => {
        const component = <WishList name={user.name} wishes={user.wishes} />;
        return <Route exact path={`/${user.name}`} render={() => component} />;
      })}
    </div>
  );
};

export default App;
