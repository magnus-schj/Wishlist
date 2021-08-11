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
// firebase.analytics();

// ! ------

export const auth = firebase.auth();
export const db = firebase.firestore();

// ! Sign in with google
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

// ? Create user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // gets user reference for the firestore
  const userRef = await db.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // if the document doesnt exist, try to create one.
  if (!snapShot.exists) {
    const { email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

// ? create wishList document
export const createWishListDocument = async (userAuth) => {
  if (!userAuth) return;

  // get wishList reference for firestore
  const wishListRef = await db.doc(`wishLists/${userAuth.uid}`);

  const snapshot = await wishListRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();

    try {
      await wishListRef.set({
        createdAt,
      });
    } catch (error) {
      console.log("error when creating wishlist:", error);
    }
  }
  return wishListRef;
};

// format users

export const formatCollection = (collection) => {
  let collectionFormatted = [];
  collection.forEach((doc) => {
    const docWithUid = { ...doc.data(), uid: doc.id };
    collectionFormatted.push(docWithUid);
  });
  return collectionFormatted;
};

// ? ADD wish

// ? params: a uid for collection path and a wish to get added.
// ? get ref for the wishlist, and add a new document.
export const addWish = async (uid, wish) => {
  const wishListRef = db.collection(`wishLists/${uid}/wishes`);
  await wishListRef.add({
    wish: wish,
    createdAt: new Date(),
  });
};

// ! DELETE wish

export const deleteWish = async (uid, wish) => {
  const userRef = await db.doc(`users/${uid}`);
  const snapShot = await (await userRef.get()).data();
  console.log("uid:", uid);
  console.log("wish:", wish);
  userRef.update({
    ...snapShot,
    wishes: firebase.firestore.FieldValue.arrayRemove(wish),
  });
};
