import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAFl__D3bxKdNGjm76aTZvnYN09103U4YE",
  authDomain: "mama-zon.firebaseapp.com",
  databaseURL: "https://mama-zon.firebaseio.com",
  projectId: "mama-zon",
  storageBucket: "mama-zon.appspot.com",
  messagingSenderId: "901177555423",
  appId: "1:901177555423:web:8d9e3132edf46c5777ec6a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
