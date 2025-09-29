import { initializeApp } from "firebase/app";

// *** USE YOUR CONFIG OBJECT ***
// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCf4r4_JiAWZjMYxHx2oPdOOPBunUeG9zg",
  authDomain: "taskboard-drethedev.firebaseapp.com",
  databaseURL: "https://taskboard-drethedev.firebaseio.com",
  projectId: "taskboard-drethedev",
  storageBucket: "taskboard-drethedev.appspot.com",
  messagingSenderId: "868447749524",
  appId: "1:868447749524:web:bc280f2ee21da6c3fe7b81",
};
// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
