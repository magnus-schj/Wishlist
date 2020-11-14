import React from "react";


import './App.css';
import UserList from "./compnents/users-list/usersList.component.jsx";
import "./compnents/main-container/MainContainer.component.jsx";
import MainContainer from './compnents/main-container/MainContainer.component.jsx';
import WishList from "./compnents/wishList/WishList.component";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentContainer: <WishList />,
    }
  }
  render() {
  const currentContainer = this.state.currentContainer;
    return (
      <div className="App">
        <UserList />
        <MainContainer currentContainer={currentContainer}/>
      </div>
    );  
  }
}

export default App;
