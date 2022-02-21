import "./baseStyles.scss";

import { getFirestore } from "firebase/firestore";
import { useFirebaseApp, FirestoreProvider, AuthProvider } from "reactfire";
import Root from "./components/Root.component";
import { auth } from "./firebase/firebase.utils";
import { useMediaQuery } from "@mui/material";
import MobileList from "./components/MobileList.component";
import DesktopList from "./components/DestopList.component";

function App() {
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <AuthProvider sdk={auth}>
        <Root />
      </AuthProvider>
    </FirestoreProvider>
  );
}

export default App;
