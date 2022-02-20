// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA_9l3UAQx9XkN4GQUrx27uybeOAn3RjF0",

  authDomain: "wishlist-dev-5f414.firebaseapp.com",

  projectId: "wishlist-dev-5f414",

  storageBucket: "wishlist-dev-5f414.appspot.com",

  messagingSenderId: "220708743612",

  appId: "1:220708743612:web:7c1afe7a1ac3ecf09d63b9",

  measurementId: "G-SH12GWBKDW",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore();

// ** Sign in with google
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
