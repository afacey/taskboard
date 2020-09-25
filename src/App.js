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
    const dbRef = firebase.database().ref("tasks");

    dbRef.on('value', response => {
      const tasks = response.val();
      
      const taskItems = [];
      for (let taskItem in tasks) {
        const task = {
          key: taskItem,
          task: tasks[taskItem].task,
          status: tasks[taskItem].status
        }
        taskItems.push(task);
      }
      
      this.setState({taskItems: taskItems});
    });
  }

  handleTaskChange = (evt) => {
    this.setState({newTask: evt.target.value})
  }

  removeTask = (key) => {
    const dbRef = firebase.database().ref('tasks');
    dbRef.child(key).remove();
  }

  moveTask = (key, status) => {
    const dbRef = firebase.database().ref('tasks/' + key);

    const newStatus = status === 'new' ? 'inProgress' : 'complete';
    console.log("move task", key, status, newStatus)

    // dbRef.update()
  }

  addTask = (evt) => {
    evt.preventDefault();
    console.log(this.state.newTask)

    const dbRef = firebase.database().ref("tasks");

    const newTask = {
      task: this.state.newTask,
      status: 'new'
    }

    dbRef.push(newTask)

    this.setState({newTask: ""});
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <div className="wrapper">
            <h1>Productivity App</h1>
            <form action="#" onSubmit={(e) => this.addTask(e)}>
              <label htmlFor="task">Add A New Task</label>
              <input onChange={this.handleTaskChange} type="text" name="task" id="task" placeholder="add a task" value={this.state.newTask}/>
              <button>Add Task!</button>
            </form>
          </div>
        </header>
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
                    >
                      {status}
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
