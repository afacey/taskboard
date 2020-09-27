import React, { Component } from 'react';
import firebase from './firebase.js'
import TaskList from './TaskList.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      taskStatus: ['open', 'inProgress', 'complete'],
      taskItems: [],
    }
  }

  // --------------------------- componentDidMount
  componentDidMount() {
    // db reference of "tasks"
    const dbRef = firebase.database().ref("tasks");

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
      this.setState({taskItems});
    });
  }
  // --------------------------- clearTaskboard
  clearTaskboard = (newTask) => firebase.database().ref("tasks").remove();

  // --------------------------- addTask
  addTask = (newTask) => firebase.database().ref("tasks").push(newTask);
  
  // --------------------------- updateTask
  updateTask = (key, newValue) => firebase.database().ref('tasks/' + key).update({task: newValue});

  // --------------------------- removeTask
  removeTask = (key) => firebase.database().ref('tasks').child(key).remove();

  // --------------------------- moveTask
  moveTask = (key, status, direction) => {
    const dbRef = firebase.database().ref('tasks/' + key);
    const { taskStatus } = this.state;

    // find current status index
    const currentIdx = taskStatus.indexOf(status);

    // store new index as the value of currentIdx + the direction (1 or - 1)
    let newIdx = currentIdx + direction;

    // prevent out of range indexes of the taskStatus array
    // if newIdx < 0 - set to 0, if newIdx gte taskStatus length - set to last item in array, otherwise keep the value
    newIdx = newIdx < 0 ? 0 : newIdx >= taskStatus.length ? taskStatus.length - 1 : newIdx;

    // if task has a new position update it in the database
    newIdx !== currentIdx && dbRef.update({status: taskStatus[newIdx]});
  }

  // --------------------------- render
  render() {
    // heading text for task status lists
    const statusString = {
      open: "Open",
      inProgress: "In Progress",
      complete: "Completed"
    }

    return (
      <div className="App">
        {/* START of HEADER */}
        <header className="App-header">
          {/* TODO flex-container still needed? */}
          <div className="wrapper flex-container">
            <h1>Task Board</h1>
            { this.state.taskItems.length > 0 && <button onClick={this.clearTaskboard}>Clear Board</button>}
          </div>
        </header>
        
        {/* START of MAIN */}
        <main className="App-main">
          <div className="wrapper">
            <div className="taskLists">
              { 
                this.state.taskStatus.map((status, idx) => {
                  const tasks = this.state.taskItems.filter(task => task.status === status);
                  return (
                    <TaskList 
                      className="taskList" 
                      key={idx} 
                      status={status}
                      tasks={tasks} 
                      addTask={this.addTask}
                      moveTask={this.moveTask}
                      removeTask={this.removeTask}
                      editTask={this.updateTask}
                    >
                      {statusString[status]}
                    </TaskList>
                  )
                })
              } 
            </div>
          </div>
        </main>

        {/* START of FOOTER */}
        <footer>
          <div className="wrapper">
            <p>Copyright 2020 - Created By <a href="https://andrefacey.com">Andre Facey</a> at <a href="https://junocollege.com">Juno College</a> - Design Inspiration from Scott Sobere-Yu and <a href="https://dribbble.com/shots/6250762-Kanban-Board">Nikita</a></p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
