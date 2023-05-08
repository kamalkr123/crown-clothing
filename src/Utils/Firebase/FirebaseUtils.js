import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
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
import { FirebaseErrorCodes } from "../FirebaseErrorCodes";
const firebaseConfig = {
  apiKey: "AIzaSyABQ7Lv9n05-sYyWE1Rs1rEA8RMzE40qUg",
  authDomain: "crown-clothing-db-f2b9f.firebaseapp.com",
  projectId: "crown-clothing-db-f2b9f",
  storageBucket: "crown-clothing-db-f2b9f.appspot.com",
  messagingSenderId: "552895670978",
  appId: "1:552895670978:web:277595de7527972c0d295b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth();

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocument = async (collectionKey, objectsToAdd) => {
  const collectionDocRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionDocRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
};

export const getCategoriesAndDocument = async () => {
  try {
    const collectionRef = collection(db, "categories");
    const q = query(collectionRef);

    const querySnapShot = await getDocs(q);
    console.log("test query", querySnapShot);
    const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
      const { title, items } = docSnapShot.data();
      acc[title.toLowerCase()] = items;

      return acc;
    }, {});
    return categoryMap;
  } catch (error) {
    console.log(error);
  }
};

export const createUserDocumentAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("An error occured", error.messasge);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(FirebaseErrorCodes[error.code]);
  }
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(FirebaseErrorCodes[error.code]);
  }
};

export const signOutUser = async () => await signOut(auth);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
