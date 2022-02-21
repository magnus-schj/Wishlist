import "./baseStyles.scss";

import { getFirestore } from "firebase/firestore";
import { useFirebaseApp, FirestoreProvider, AuthProvider } from "reactfire";
import Root from "./components/Root.component";
import { auth } from "./firebase/firebase.utils";
import { useMediaQuery } from "@mui/material";
import MobileHome from "./components/MobileList.component";
import DesktopHome from "./components/DestopList.component";

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
