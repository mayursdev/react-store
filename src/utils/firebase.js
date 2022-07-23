import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

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

const createFirebaseAuthFromGooglePopup = () => {
  return signInWithPopup(auth, googleProvider);
};

const createFirebaseAuthFromEmailPassword = (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

const createUserFromFirebaseAuth = async (
  authResponse,
  additionalInfo = {}
) => {
  const { user } = authResponse;
  const userDocRef = doc(db, "users", user.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = { ...user, ...additionalInfo };
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

const signInUserAuthFromEmailPassword = (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};

const signOutUser = ()=>{
  return signOut(auth);
}

export {
  auth,
  createFirebaseAuthFromGooglePopup,
  createFirebaseAuthFromEmailPassword,
  createUserFromFirebaseAuth,
  signInUserAuthFromEmailPassword,
  signOutUser
};
