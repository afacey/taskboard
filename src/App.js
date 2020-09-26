import React, { Component } from 'react';
import firebase from './firebase.js'
import TaskList from './TaskList.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      newTask: "",
      taskStatus: ['open', 'inProgress', 'complete'],
      taskItems: []
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

// --------------------------- handleTaskChange
  // control input DOM changes in state
  handleTaskChange = (evt) => this.setState({newTask: evt.target.value});

  // --------------------------- removeTask
  removeTask = (key) => {
    const dbRef = firebase.database().ref('tasks');
    dbRef.child(key).remove();
  }
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
// --------------------------- addTask
  addTask = (evt) => {
    evt.preventDefault();
    const dbRef = firebase.database().ref("tasks");
    
    // store new task in object to pushed to db later
    const newTask = {
      task: this.state.newTask,
      status: this.state.taskStatus[0]
    }

    // push new task to the database
    dbRef.push(newTask)
    
    // clear the add task input
    this.setState({newTask: ""});
  }

// --------------------------- updateTask
  updateTask = (key, newValue) => {
    const dbRef = firebase.database().ref('tasks/' + key);
    dbRef.update({task: newValue})
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
          <div className="wrapper">
            <h1>Task Board</h1>
            <form action="#" onSubmit={(e) => this.addTask(e)}>
              <label htmlFor="task" className="sr-only">Add A New Task</label>
              {/* TODO remove autocomplete for submission */}
              <input onChange={this.handleTaskChange} type="text" name="task" id="task" placeholder="add a task" value={this.state.newTask} autoComplete="off"/>
              <button>Add Task!</button>
            </form>
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
