import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// ! Basic config
const firebaseConfig = {
  apiKey: "AIzaSyBYLJE5BMsC0IR-PGKa2dm4gnC7QRiB8p0",
  authDomain: "wishlist-db-ad30f.firebaseapp.com",
  projectId: "wishlist-db-ad30f",
  storageBucket: "wishlist-db-ad30f.appspot.com",
  messagingSenderId: "712561036450",
  appId: "1:712561036450:web:146478e1de2c1942addbfb",
  measurementId: "G-3VQY7W7JP3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// ! ------

export const auth = firebase.auth();
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
