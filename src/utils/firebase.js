import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
} from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

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

const signOutUser = () => {
  return signOut(auth);
};

const onAuthChange = (cb) => {
  return onAuthStateChanged(auth, cb);
};

const addCollectionAndDocs = async (data, dataConfig = {}) => {
  const { collectionName, docIdKey } = dataConfig;
  if (!collectionName || !docIdKey) return;

  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionName);
  data.forEach((item) => {
    const docRef = doc(collectionRef, item[docIdKey]);
    batch.set(docRef, item);
  });

  await batch.commit();
  console.log("Data uploaded to firebase.");
};

const fetchAllProductsFromDB = async () => {
  const collectionRef = collection(db, "products");
  const q = query(collectionRef);
  const snapshot = await getDocs(q);

  const products = snapshot.docs.reduce((acc, docSnapshot) => {
    const docData = docSnapshot.data();
    acc[docData.title] = docData;

    return acc;
  }, {});

  return products;
};

export {
  auth,
  createFirebaseAuthFromGooglePopup,
  createFirebaseAuthFromEmailPassword,
  createUserFromFirebaseAuth,
  signInUserAuthFromEmailPassword,
  signOutUser,
  onAuthChange,
  addCollectionAndDocs,
  fetchAllProductsFromDB,
};
