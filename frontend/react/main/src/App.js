import "./App.css";
import UserMenu from "./components/user-menu/UserMenu.component";
import MOCK_DATA from "./assets/MockData";
import { Route } from "react-router-dom";
import WishPage from "./pages/wish-page/WishPage.component";

const App = () => {
  return (
    <div className="App">
      <UserMenu />
      <div className="header">
        <h1>Ønskelister</h1>
      </div>
      {MOCK_DATA.map((user) => {
        const component = <WishPage name={user.name} wishes={user.wishes} />;
        return <Route exact path={`/${user.name}`} render={() => component} />;
      })}
    </div>
  );
};

export default App;
