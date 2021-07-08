import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./features/currentUser/currentUser.slice";
import { auth, signInWithGoogle } from "./firebase/firebase.utils";

import { CssBaseline, Button } from "@material-ui/core";
import SignInAndSignUp from "./components/signInAndSignUp/SignInAndSignUp.component";

function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser.userInfo);
  // const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // setCurrentUser(user);
      dispatch(setCurrentUser(user));
      // console.log(user.uid);
      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);
  return (
    <>
      <CssBaseline />
      <div className="App">
        <h1>App</h1>
        {currentUser ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => auth.signOut()}
          >
            Sign out
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        )}
        <SignInAndSignUp />
      </div>
    </>
  );
}

export default App;
