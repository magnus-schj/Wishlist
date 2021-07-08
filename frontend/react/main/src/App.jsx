import React from "react";
import { useSelector } from "react-redux";
import { CssBaseline, Container } from "@material-ui/core";
import SignInAndSignUp from "./components/signInAndSignUp/SignInAndSignUp.component";

function App() {
  const currentUser = useSelector((state) => state.currentUser.userInfo);
  return (
    <>
      <CssBaseline />
      <Container className="App">
        <h1>App</h1>
        <SignInAndSignUp />
      </Container>
    </>
  );
}

export default App;
