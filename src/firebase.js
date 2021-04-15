import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDYYngTpl7DbGIfBNDPs_3YEOcsOVKrW2o",
  authDomain: "clone-challenge-be004.firebaseapp.com",
  projectId: "clone-challenge-be004",
  storageBucket: "clone-challenge-be004.appspot.com",
  messagingSenderId: "625465796023",
  appId: "1:625465796023:web:13413bca9b888aa6013432",
  measurementId: "G-GJ000PFCVE",
});

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider };
