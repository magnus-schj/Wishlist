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
      isMain: true,
      currentContainer: <WishList />,
      userInfo: [
        {name: "Magnus", wishes: ["Hanne","Fortnite VBucks", "Stereoanlegg"]}
      ]
    };
  } 
  renderMain = () => {
    return (this.state.isMain ? <Main /> : <WishList />);
  }
  handleClick = () => {
    this.setState({currentContainer: <Main name="Magnus"/>})
  };
  render() {
  //const currentContainer = this.state.currentContainer;
  const {currentContainer, userInfo} = this.state;
    return (
      <div className="App">
        <UserList handleClick={this.handleClick} />
        <MainContainer userInfo={userInfo} currentContainer={currentContainer} renderMain={this.renderMain} isMain={this.state.isMain}/>
      </div>
    );  
  }
}

export default App;
