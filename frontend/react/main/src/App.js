import "./App.css";
import UserMenu from "./components/user-menu/UserMenu.component";
import MOCK_DATA from "./assets/MockData";
import { Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      <UserMenu />
      <h1>Ønskelister</h1>
      {/* {MOCK_DATA.map((user) => {
        <Route exact path={`/${user.name}`} component={}/>;
      })} */}
    </div>
  );
};

export default App;
