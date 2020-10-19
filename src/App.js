import React, { Component } from 'react';
import firebase from './firebase.js';
import Swal from "sweetalert2";
import Header from './components/Header.js';
import TaskBoardMenu from './components/TaskBoardMenu.js';
import TaskList from './components/TaskList.js';
import Footer from './components/Footer.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      loadComplete: false,
      user: null,
      dbRef: "public/",
      taskStatus: ['open', 'inProgress', 'complete'],
      taskItems: [],
      listFilter: "all",
      searchTerms: "",
      searchItems: []
    }
  }

  // --------------------------- componentDidMount
  componentDidMount() {
    
    // check if there is a signed in user
    firebase.auth().onAuthStateChanged(user => {
      user
        // if there is a user signed in, update state with the id, and user's dbRef
        ? this.setState({user: user.uid, dbRef: user.uid + "/"}, this.retrieveTaskItems)
        // else retrieve the task items from the default non-authenticated dbRef
        : this.retrieveTaskItems();
    })
  }
  
  // --------------------------- signInUser (Google Auth)

  signInUser = () => {
    // create new google auth provider
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // initiate sign in with popup using google auth
    firebase.auth().signInWithPopup(provider)
      .then(({user}) => {
        // once user is signed in, set user info and user's dbRef in state
        this.setState({
          user: user.uid,
          dbRef: user.uid + "/",
        });
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
  logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        // once user is logged out, reset user and dbRef in state
        this.setState({user: null, dbRef: "public/"}, this.retrieveTaskItems)
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
  retrieveTaskItems = () => {
    // db reference of "tasks"
    const dbRef = firebase.database().ref(this.state.dbRef);
  
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
      this.setState({taskItems}, () => this.setState({loadComplete: true}));
    })
    

  }

  // --------------------------- clearTaskboard
  clearTaskboard = () => {
    // remove all items in firebase
    firebase.database().ref(this.state.dbRef).remove();

    // reset searchItems to empty
    this.setState({searchItems: []})
  }

  // --------------------------- clearTaskList
  clearTaskList = (taskListItems, status) => {
    // pass an object of keys with null values to clear multiple items
    firebase.database().ref(this.state.dbRef).update(taskListItems);

    // update the searchItems with the filtered out items that may have been removed
    const filterSearchItems = this.state.searchItems.filter(item => item.status !== status);
    this.setState({searchItems: filterSearchItems})
  }

  // --------------------------- addTask
  addTask = (newTask) => firebase.database().ref(this.state.dbRef).push(newTask);
  
  // --------------------------- updateTask
  updateTask = (key, newValue) => firebase.database().ref(this.state.dbRef + key).update({task: newValue});

  // --------------------------- removeTask
  removeTask = (key) => firebase.database().ref(this.state.dbRef).child(key).remove();

  // --------------------------- moveTask
  moveTask = (key, status, direction) => {
    const dbRef = firebase.database().ref(this.state.dbRef + key);
    const { taskStatus } = this.state;

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
        .then(() => this.state.searchTerms && this.handleSearch());
    }
  }

  // --------------------------- handleChange
  handleChange = (evt) => {
    const { name, value } = evt.target;
    
    // call handleSearch if the input searchTerms input was changed and there are tasks
    if (name === 'searchTerms' && this.state.taskItems.length) {
      // set seachTerms state to value, and then call this.handleSearch
      this.setState({[name]: value}, this.handleSearch);
    }
    else { 
      // otherwise update other inputs in state by their name and input value
      this.setState({[name]: value});
    }
  }

  // --------------------------- handleSearch
  handleSearch = () => {
    const { searchTerms, taskItems }= this.state;
    // create regex for search terms - case insensistive
    const searchString = new RegExp(searchTerms, 'i');

    // filter out tasks by test against search terms
    const searchItems = taskItems.filter(({task}) => searchString.test(task));

    // store filtered results into searchItems state to preserve the state of the taskItems
    this.setState({searchItems});
  }

  // --------------------------- handleSearch
  clearSearch = () => { this.setState({searchTerms: "", searchItems: []}); }

  // --------------------------- render
  render() {
    // methods
    const { addTask, moveTask, removeTask, updateTask, handleChange, clearTaskboard, clearTaskList, clearSearch, signInUser, logoutUser } = this;
    // state items
    const { taskStatus, taskItems, listFilter, searchItems, searchTerms, user, loadComplete } = this.state;
    
    // if there are search terms, display the filtered searchItems, otherwise show all taskItems
    const items = !searchTerms.length ? taskItems : searchItems;
    // if a list has been filtered, only display items from that list
    const lists = listFilter === 'all' ? taskStatus : [listFilter];

    return (
      <div className="pageContainer">
        {/* START of HEADER */}
        <Header clearTaskboard={clearTaskboard} numOfTasks={taskItems.length} user={user} loadComplete={loadComplete} signInUser={signInUser} logoutUser={logoutUser} />
        
        {/* START of MAIN */}
        <main>
          <div className="wrapper">
            <TaskBoardMenu 
              handleChange={handleChange}
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
}

export default App;
