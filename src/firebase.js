// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

// *** USE YOUR CONFIG OBJECT ***
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCf4r4_JiAWZjMYxHx2oPdOOPBunUeG9zg",
  authDomain: "taskboard-drethedev.firebaseapp.com",
  databaseURL: "https://taskboard-drethedev.firebaseio.com",
  projectId: "taskboard-drethedev",
  storageBucket: "taskboard-drethedev.appspot.com",
  messagingSenderId: "868447749524",
  appId: "1:868447749524:web:bc280f2ee21da6c3fe7b81"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;