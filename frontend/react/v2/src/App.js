import './App.css';

import UserList from './components/user-list/user-list.component'
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <UserList />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
