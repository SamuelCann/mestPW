import firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "clone-9832c.firebaseapp.com",
  projectId: "clone-9832c",
  storageBucket: "clone-9832c.appspot.com",
  messagingSenderId: "356280725344",
  appId: "1:356280725344:web:5f0e70dea0921f71eab805",
  measurementId: "G-1VJ0D8C38W",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
