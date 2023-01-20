import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDveB64lyZq8Id5b_NEhuirRxmIR2mhTmc",
  authDomain: "netflix-clone-b36bd.firebaseapp.com",
  projectId: "netflix-clone-b36bd",
  storageBucket: "netflix-clone-b36bd.appspot.com",
  messagingSenderId: "530896098592",
  appId: "1:530896098592:web:2b682ee2172927cf7ff345",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
