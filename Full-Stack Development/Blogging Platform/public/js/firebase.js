import firebase from "firebase/app";
import "firebase/firestore";

// Firebase configuration object containing your project's credentials
let firebaseConfig = {
  apiKey: "AIzaSyCMxXG0m8rlvXvI2G57jZWB8XTMzSYwgGI",
  authDomain: "blogging-website-b792d.firebaseapp.com",
  projectId: "blogging-website-b792d",
  storageBucket: "blogging-website-b792d.appspot.com",
  messagingSenderId: "1039884086085",
  appId: "1:1039884086085:web:183499e8e39dbe664b2c2c"
};

// Initialize Firebase with the provided configuration
firebase.initializeApp(firebaseConfig);

// Access Firestore database
const db = firebase.firestore();

export default db;
