import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signInWithPopup,
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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export { auth, signInWithGooglePopup };
