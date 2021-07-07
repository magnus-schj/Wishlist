import React, { useState, useEffect } from "react";

import { auth, signInWithGoogle } from "./firebase/firebase.utils";

import { CssBaseline } from "@material-ui/core";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      console.log("user:", user);
      setCurrentUser(user);

      return () => {
        console.log("unmounted.");
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
          <button onClick={() => auth.signOut()}>Sign out</button>
        ) : (
          <button onClick={signInWithGoogle}>Sign in with google</button>
        )}
      </div>
    </>
  );
}

export default App;
