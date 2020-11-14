import './App.css';
import UserList from "./compnents/users-list/usersList.component.jsx";
import "./compnents/main-container/MainContainer.component.jsx";
import MainContainer from './compnents/main-container/MainContainer.component.jsx';

function App() {
  return (
    <div className="App">
      <UserList />
      <MainContainer />
    </div>
  );
}

export default App;
