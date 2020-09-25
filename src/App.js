import React, { Component } from 'react';
import firebase from './firebase.js'
import TaskList from './TaskList.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      newTask: "",
      taskStatus: ['new', 'inProgress', 'complete'],
      taskItems: []
    }
  }

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

  // control input DOM changes in state
  handleTaskChange = (evt) => this.setState({newTask: evt.target.value});

  removeTask = (key) => {
    const dbRef = firebase.database().ref('tasks');
    dbRef.child(key).remove();
  }

  moveTask = (key, status, direction) => {
    const dbRef = firebase.database().ref('tasks/' + key);
    // TODO may need to change for stretch goals implementation
    // const newStatus = status === 'new' ? 'inProgress' : 'complete';
    // const newStatus = this.state.taskStatus[direction]
    let newStatus;

    if (direction === 1) {
      newStatus = status === 'new' ? 'inProgress' : 'inProgress' ? 'complete' : 'new';
    } 
    else if (direction === -1) {
      newStatus = status === 'complete' ? 'inProgress' : 'inProgress' ? 'new' : 'complete';
    }

    dbRef.update({status: newStatus});
  }

  addTask = (evt) => {
    evt.preventDefault();
    const dbRef = firebase.database().ref("tasks");

    const newTask = {
      task: this.state.newTask,
      status: 'new'
    }

    dbRef.push(newTask)
    
    this.setState({newTask: ""});
  }

  updateTask = (key, newValue) => {
    const dbRef = firebase.database().ref('tasks/' + key);

    dbRef.update({task: newValue})
  }

  render() {
    // heading text for task status lists
    const statusString = {
      new: "New Tasks",
      inProgress: "In Progress",
      complete: "Completed"
    }
    return (
      <div className="App">
        {/* START of HEADER */}
        <header className="App-header">
          <div className="wrapper">
            <h1>Productivity App</h1>
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
                      key={idx} 
                      className="taskList" 
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
      </div>
    );
  }
}

export default App;
