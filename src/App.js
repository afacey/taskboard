import React, { useState, useEffect } from 'react';
import firebase from './firebase.js';
// import Swal from "sweetalert2";
import Header from './components/Header.js';
import TaskBoardMenu from './components/TaskBoardMenu.js';
import TaskList from './components/TaskList.js';
import Footer from './components/Footer.js';
import './App.css';
import { useCallback } from 'react';
import { useContext } from 'react';
import { UserContext } from './contexts/UserContext.js';
import { ThemeContext } from './contexts/ThemeContext.js';

const App = () => {
  const [ loadComplete, setLoadComplete ] = useState(false); 
  const [ taskItems, setTaskItems ] = useState([]);
  const [ listFilter, setListFilter ] = useState("all");

  const [ searchTerms, setSearchTerms ] = useState("");
  const [ searchItems, setSearchItems ] = useState([]);

  const { theme } = useContext(ThemeContext);

  const { user, checkForUser } = useContext(UserContext);

  const taskStatus = ['open', 'inProgress', 'complete'];

  // --------------------------- retrieveTaskItems
  const retrieveTaskItems = useCallback(() => {
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
      console.log('got tasks');
      // setLoadComplete(true);
    })
  }, [user.dbRef])  

  // retreive tasks once userCheck is true
  useEffect(function fetchTasksAfterUserCheck() {
    if (!checkForUser) {
      retrieveTaskItems()
      setLoadComplete(true);
    }

  }, [checkForUser, retrieveTaskItems])

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

  // filter tasks from search terms
  useEffect(handleSearch, [searchTerms, taskItems])

  // --------------------------- clearSearch
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
  <div className={`pageContainer ${theme}`}>
    {/* START of HEADER */}
    <Header 
      numOfTasks={taskItems.length} 
      loadComplete={loadComplete} 
    />
    
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
                  // user={user}
                  moveTask={moveTask}
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
