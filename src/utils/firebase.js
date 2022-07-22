import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAe1msyFW10Jnf-O-YUhxcLXkGLNKZDdWM",
  authDomain: "react-store-ecccc.firebaseapp.com",
  projectId: "react-store-ecccc",
  storageBucket: "react-store-ecccc.appspot.com",
  messagingSenderId: "688017387495",
  appId: "1:688017387495:web:a116918a28268799c41742",
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

const signInWithGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

const createUserFromGoogleSignIn = async (googleSignInResp) => {
  const { user } = googleSignInResp;
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (e) {
      console.log(e);
    }
  }

  return userDocRef;
};

export { auth, signInWithGooglePopup, createUserFromGoogleSignIn };
