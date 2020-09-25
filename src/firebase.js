// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// *** USE YOUR CONFIG OBJECT ***
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDBqq9f4CwQkWmvi0jA9or1uqWUTx73r_E",
  authDomain: "andre-facey-project-five.firebaseapp.com",
  databaseURL: "https://andre-facey-project-five.firebaseio.com",
  projectId: "andre-facey-project-five",
  storageBucket: "andre-facey-project-five.appspot.com",
  messagingSenderId: "940406876843",
  appId: "1:940406876843:web:d25925e9d0cc096f1b65ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;