import "./baseStyles.scss";

import { getFirestore } from "firebase/firestore";
import { useFirebaseApp, FirestoreProvider, AuthProvider } from "reactfire";
import Root from "./components/Root.component";
import { auth } from "./firebase/firebase.utils";

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
