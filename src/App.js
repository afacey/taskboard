import React, { useState, useEffect } from 'react';
import firebase from './firebase.js';
import Swal from "sweetalert2";
import Header from './components/Header.js';
import TaskBoardMenu from './components/TaskBoardMenu.js';
import TaskList from './components/TaskList.js';
import Footer from './components/Footer.js';
import './App.css';

const App = () => {
  const [ loadComplete, setLoadComplete ] = useState(false); 
  const [ userCheck, setUserCheck ] = useState(false); 
  const [ user, setUser ] = useState({dbRef: "public/", loggedIn: false});
  const [ taskStatus, setTaskStatus ] = useState(['open', 'inProgress', 'complete']);
  const [ taskItems, setTaskItems ] = useState([]);
  const [ listFilter, setListFilter ] = useState("all");
  const [ searchTerms, setSearchTerms ] = useState("");
  const [ searchItems, setSearchItems ] = useState([]);
  
  // --------------------------- useEffects
  // ------- check if there's a logged in user before retrieving any tasks
  useEffect(() => {
    // check if there is a current user
    firebase.auth().onAuthStateChanged((user) => {
      // if there is a user update state with the dbRef and loggedIn to true
      if (user) {
        setUser({dbRef: user.uid + "/", loggedIn: true});
      }
      // set userCheck to true
      setUserCheck(true)
    })
  }, [])

  // retreive tasks once userCheck is true
  useEffect(() => {
    if (userCheck) {
      retrieveTaskItems()
      
      setLoadComplete(true);
    }

  }, [userCheck])
  
  // filter tasks from search terms
  useEffect(() => {handleSearch()}, [searchTerms])

  // --------------------------- signInUser (Google Auth)
  const signInUser = () => {
    // create new google auth provider
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // initiate sign in with popup using google auth
    firebase.auth().signInWithPopup(provider)
      .then(({user}) => {
        // once user is signed in, set user info and user's dbRef in state
        
        setUser({
          loggedIn: true,
          dbRef: user.uid + "/"
        })

        setUserCheck(false);
        console.log('user logged in');
      })
      .catch(error => {
        // if there is an error, display an alert
        Swal.fire({
          title: "Oops!",
          text: "There was an error signing in: " + error,
          icon: "error",
          confirmButton: "OK"
        })
      })
  }

  // --------------------------- logoutUser
  const logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        // once user is logged out, reset user and dbRef in state
        setUser({
          loggedIn: false,
          dbRef: "public/"
        })

        setUserCheck(false);
        console.log('user logged out');
      })
      .catch(error => {
        // if there is an error, display an alert
        Swal.fire({
          title: "Oops!",
          text: "There was an error while logging out: ", error,
          icon: "error",
          confirmButton: "OK"
        })
      })
  }

  // --------------------------- retrieveTaskItems
  const retrieveTaskItems = () => {
    // db reference of "tasks"
    const dbRef = firebase.database().ref(user.dbRef);

    // listener for any value change on the db reference
    dbRef.on('value', response => {
      const tasksData = response.val();
      
      // create empty array to store data retrieved from db later
      const taskItems = [];
      for (const key in tasksData) {
        const taskItem = {
          key: key,
          task: tasksData[key].task,
          status: tasksData[key].status
        }
        taskItems.push(taskItem);
      }
      
      // update state with the taskItems retrieved from the database
      setTaskItems(taskItems)
      // setLoadComplete(true);
    })
  }  

  // --------------------------- clearTaskboard
  const clearTaskboard = () => {
    // remove all items in firebase
    firebase.database().ref(user.dbRef).remove();

    // reset searchItems to empty
    setSearchItems([])
  }

  // --------------------------- clearTaskList
  const clearTaskList = (taskListItems, status) => {
    // pass an object of keys with null values to clear multiple items
    firebase.database().ref(user.dbRef).update(taskListItems);

    // update the searchItems with the filtered out items that may have been removed
    const filterSearchItems = searchItems.filter(item => item.status !== status);
    setSearchItems(filterSearchItems)
  }

  // --------------------------- addTask
  const addTask = (newTask) => firebase.database().ref(user.dbRef).push(newTask).then(handleSearch);
  
  // --------------------------- updateTask
  const updateTask = (key, newValue) => firebase.database().ref(user.dbRef + key).update({task: newValue}).then(handleSearch);

  // --------------------------- removeTask
  const removeTask = (key) => firebase.database().ref(user.dbRef).child(key).remove().then(handleSearch);

  // --------------------------- moveTask
  const moveTask = (key, status, direction) => {
    const dbRef = firebase.database().ref(user.dbRef + key);

    // find current status index
    const currentIdx = taskStatus.indexOf(status);

    // store new index as the value of currentIdx + the direction (1 or - 1)
    let newIdx = currentIdx + direction;

    // prevent out of range indexes of the taskStatus array
    // if newIdx < 0 - set to 0, if newIdx gte taskStatus length - set to last item in array, otherwise keep the value
    newIdx = newIdx < 0 ? 0 : newIdx >= taskStatus.length ? taskStatus.length - 1 : newIdx;

    // if task has a new position update it in the database
    if (newIdx !== currentIdx) {
      dbRef.update({status: taskStatus[newIdx]})
        // if there are searchTerms then update the task in the searchItems state
        .then(handleSearch);
    }
  }

  // --------------------------- handleChange
  const handleSearchInput = (evt) => {
    const { value } = evt.target;
    
    // call handleSearch if the input searchTerms input was changed and there are tasks
    if (taskItems.length) {
      // set seachTerms state to value, and then call this.handleSearch
      setSearchTerms(value);
    }
  }

  const handleListFilter = evt => {
    setListFilter(evt.target.value)
  }

  // --------------------------- handleSearch
  const handleSearch = () => {

    if (searchTerms) {
      // create regex for search terms - case insensistive
      const searchString = new RegExp(searchTerms, 'i');
  
      // filter out tasks by test against search terms
      const searchItems = taskItems.filter(({task}) => searchString.test(task));
  
      // store filtered results into searchItems state to preserve the state of the taskItems
      setSearchItems(searchItems);
    }
  }

  // --------------------------- handleSearch
  const clearSearch = () => { 
    setSearchTerms("");
    setSearchItems([]);
  }

  // --------------------------- return
    
  // if there are search terms, display the filtered searchItems, otherwise show all taskItems
  const items = !searchTerms.length ? taskItems : searchItems;

  // if a list has been filtered, only display items from that list
  const lists = listFilter === 'all' ? taskStatus : [listFilter];

  return (
    <div className="pageContainer">
      {/* START of HEADER */}
      <Header clearTaskboard={clearTaskboard} numOfTasks={taskItems.length} userLoggedIn={user.loggedIn} loadComplete={loadComplete} signInUser={signInUser} logoutUser={logoutUser} />
      
      {/* START of MAIN */}
      <main>
        <div className="wrapper">
          <TaskBoardMenu 
            handleListFilter={handleListFilter}
            handleSearchInput={handleSearchInput}
            searchTerms={searchTerms}
            clearSearch={clearSearch}
          />
          
          <section className="taskLists">
            { 
              lists.map((status) => {
                const tasks = items.filter(task => task.status === status);
                return (
                  <TaskList 
                    className="taskList" 
                    key={status} 
                    status={status}
                    tasks={tasks} 
                    addTask={addTask}
                    moveTask={moveTask}
                    removeTask={removeTask}
                    editTask={updateTask}
                    clearTaskList={clearTaskList}
                  />
                )
              })
            } 
          </section>
        </div>
      </main>

      {/* START of FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
