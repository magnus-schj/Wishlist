import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { FirebaseAppProvider } from "reactfire";
import App from "./App";
import { firebaseConfig } from "./firebase/firebase.utils";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <CssBaseline />
      <App />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
