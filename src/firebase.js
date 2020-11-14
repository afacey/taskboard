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
export const addTask = (dbRef, newTask) => {
  console.log('add task called');
  firebase.database().ref(dbRef).push(newTask);
}

// --------------------------- updateTask
export const updateTask = (dbRef, key, newValue) => firebase.database().ref(dbRef + key).update({task: newValue});

// --------------------------- removeTask
export const removeTask = (dbRef, key) => firebase.database().ref(dbRef).child(key).remove();


// --------------------------- moveTask
// const moveTask = (dbRef, key, status) => {
//   const dbRef = firebase.database().ref(user.dbRef + key);

//   // find current status index
//   const currentIdx = taskStatus.indexOf(status);

//   // store new index as the value of currentIdx + the direction (1 or - 1)
//   let newIdx = currentIdx + direction;

//   // prevent out of range indexes of the taskStatus array
//   // if newIdx < 0 - set to 0, if newIdx gte taskStatus length - set to last item in array, otherwise keep the value
//   newIdx = newIdx < 0 ? 0 : newIdx >= taskStatus.length ? taskStatus.length - 1 : newIdx;

//   // if task has a new position update it in the database
//   if (newIdx !== currentIdx) {
//     dbRef.update({status: taskStatus[newIdx]})
//   }
// }

// --------------------------- clearTaskList
export const clearTaskList = (dbRef, taskListItems) => {
  // pass an object of keys with null values to clear multiple items
  firebase.database().ref(dbRef).update(taskListItems);
}

  // --------------------------- clearTaskboard
export const clearTaskboard = (dbRef) => {
    // remove all items in firebase
    firebase.database().ref(dbRef).remove();
  }


// const retrieveTaskItems = useCallback(() => {
//   // db reference of "tasks"
//   const dbRef = firebase.database().ref(user.dbRef);

//   // listener for any value change on the db reference
//   dbRef.on('value', response => {
//     const tasksData = response.val();
    
//     // create empty array to store data retrieved from db later
//     const taskItems = [];
//     for (const key in tasksData) {
//       const taskItem = {
//         key: key,
//         task: tasksData[key].task,
//         status: tasksData[key].status
//       }
//       taskItems.push(taskItem);
//     }
    
//     // update state with the taskItems retrieved from the database
//     setTaskItems(taskItems)
//     console.log('got tasks');
//     // setLoadComplete(true);
//   })
// }, [user.dbRef])  



// this exports the CONFIGURED version of firebase
export default firebase;