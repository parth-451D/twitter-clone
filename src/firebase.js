// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCiBhRrrcpDQn6oD6AKjkPvdYG0DIhNfHs",
  authDomain: "twitter-clone-300c8.firebaseapp.com",
  projectId: "twitter-clone-300c8",
  storageBucket: "twitter-clone-300c8.appspot.com",
  messagingSenderId: "284386895967",
  appId: "1:284386895967:web:7fe9640547c0ddba2c13ea",
  measurementId: "G-3QD2JLQZR1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
