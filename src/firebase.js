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


// --------------------------- addTask
export const addTask = (dbRef, newTask) => { firebase.database().ref(dbRef).push(newTask); }

// --------------------------- updateTask
export const updateTask = (dbRef, key, newValue, cb) => firebase.database().ref(dbRef + key).update({task: newValue}).then(cb);

// --------------------------- removeTask
export const removeTask = (dbRef, key) => firebase.database().ref(dbRef).child(key).remove();

// --------------------------- moveTask
export const moveTask = (dbRef, status) => { firebase.database().ref(dbRef).update({status}) }

// --------------------------- clearTaskList
export const clearTaskList = (dbRef, taskListItems) => {
  // pass an object of keys with null values to clear multiple items
  firebase.database().ref(dbRef).update(taskListItems);
}

  // --------------------------- clearTaskboard
export const clearTaskboard = (dbRef) => {
  // remove all items in firebase at dbRef
  firebase.database().ref(dbRef).remove();
}

export const getTaskItems = (dbRef, cb) => {
  // listener for any value change on the db reference
  firebase.database().ref(dbRef).on('value', cb )
}


// this exports the CONFIGURED version of firebase
export default firebase;