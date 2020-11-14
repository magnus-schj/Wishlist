import React from "react";


import './App.css';
import UserList from "./compnents/users-list/usersList.component.jsx";
import "./compnents/main-container/MainContainer.component.jsx";
import MainContainer from './compnents/main-container/MainContainer.component.jsx';
import WishList from "./compnents/wishList/WishList.component";
import Main from "./compnents/main-component/main.component";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentContainer: <WishList />,
    }
  }
  handleClick = () => {
    this.setState({currentContainer: <Main name="Magnus"/>})
  }
  render() {
  const currentContainer = this.state.currentContainer;
    return (
      <div className="App">
        <UserList handleClick={this.handleClick} />
        <MainContainer currentContainer={currentContainer}/>
      </div>
    );  
  }
}

export default App;
