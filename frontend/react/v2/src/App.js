import "./App.css";

import { Switch, Route } from "react-roter-dom";

import HomePage from "./pages/homepage";

function App() {
  return (
    <div>
      <h1>WISHLIST</h1>
      <Switch>
        <Route exact path="/" compponent={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
