import { useEffect, useState } from "react";
import "./baseStyles.scss";

import ModalComponent from "./components/modal";
import SignInAndSignUp from "./components/SiginInAndSignUp/SignInAndSignUp.component";

import Typography from "@mui/material/Typography";
import { auth } from "./firebase/firebase.utils";
import Button from "@mui/material/Button";
import { motion, AnimatePresence } from "framer-motion";
import { Unsubscribe, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useFirebaseApp, FirestoreProvider } from "reactfire";
import Root from "./components/Root.component";

function App() {
  const fireStoreInstance = getFirestore(useFirebaseApp());
  return (
    <FirestoreProvider sdk={fireStoreInstance}>
      <Root />
    </FirestoreProvider>
  );
}

export default App;
