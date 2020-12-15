import './App.css';

import UserList from './components/user-list/user-list.component'
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.page';


function App() {
  return (
    <div className="App">
      <UserList />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-in-sign-up" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
