import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import autosize from 'autosize';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStaging: false,
      stagingTask: "",
      menuEnabled: false
    }
  }

  // --------------------------- componentDidUpdate
  componentDidUpdate() {
    const taskInput = document.querySelector(`#taskFormInput_${this.props.status}`);

    // only go to the end of the text if the input is not already focused
    if (taskInput && taskInput !== document.activeElement) {
      // autosize the textarea height as needed
      autosize(taskInput);

      // set the cursor to the end of the text input by setting value to "" > focus > value back to state.stagingTask
      taskInput.value = "";
      // focus on the input
      taskInput.focus();
      // set the input value
      taskInput.value = this.state.stagingTask;
    } 
  }

  // --------------------------- toggleMenuEnabled
  toggleMenuEnabled = () => this.setState({menuEnabled: !this.state.menuEnabled});

  // --------------------------- handleBlur
  handleBlur = (evt) => {
    // implementation from https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
    const currentTarget = evt.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // if new focused element is not contained in the form ... toggle out of staging a task
        this.setState({isStaging: false});
      }
    }, 5);
  }

  // --------------------------- handleStagingTask
  handleStagingTask = (e) => this.setState({stagingTask: e.target.value});
  // --------------------------- toggleTaskStaging
  toggleTaskStaging = () => this.setState({isStaging: !this.state.isStaging});

  // --------------------------- handleAddTask
  handleAddTask = (e) => {
    e.preventDefault();

    // prevent adding empty tasks
    if (this.state.stagingTask) {

      const { stagingTask: task } = this.state;
      const { status } = this.props;

      // add task
      this.props.addTask({
        task,
        status
      })

      // reset staging states
      this.setState({
        isStaging: false, 
        stagingTask: "",
      });
    }
    
  }

  // --------------------------- handleClearList
  handleClearList = () => {
    const { tasks, status, clearTaskList } = this.props;
    
    // if task lst has items
    if (tasks.length) {

      // filter out the full task items list to those with the status of the task list
      const taskListItems = 
      tasks
        .filter(task => task.status === status)
        // create an object with the keys of the task list items with a null value
        .reduce(((deleteList, taskItem) => { 
          deleteList[taskItem.key] = null;
          return deleteList;
        }), {});
      // remove the filtered items from firebase
      clearTaskList(taskListItems, status)  
    }
    // toggle tasklist menu to false
    this.setState({menuEnabled: false});
  }

  // clear stagingTask state
  clearStagingTask = () => { this.setState({stagingTask: ""}); }
  
  // --------------------------- render
  render() {
    const { status, tasks, editTask, removeTask, moveTask } = this.props;
    const {handleAddTask, toggleTaskStaging, handleStagingTask, handleClearList, clearStagingTask, handleBlur } = this;
    const { menuEnabled, stagingTask } = this.state;

     // heading text for task status lists
    const statusString = {
      open: "Open",
      inProgress: "In Progress",
      complete: "Completed"
    }

    return(
      <div className="taskList">
        <div className={`taskList__header taskList__header--${status}`}>
          <label htmlFor={`taskListMenuBtn--${status}`} className="srOnly">Click the button to toggle the task list menu to clear the task list's items</label>
          <button 
            id={`taskListMenuBtn--${status}`} className={menuEnabled ? "btn taskList__menuBtn taskList__menuBtn--active" : "btn taskList__menuBtn" } 
            onClick={this.toggleMenuEnabled}>
              <span className="srOnly">Toggle the task list's menu</span>
            {!menuEnabled ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} /> }  
          </button>
          
          <h2 className="taskList__headingText">
            {/* Task List Name */}
            {statusString[status]} 
            {/* Task List Item Counter */}
            {tasks.length > 0 && <span className="taskList__count">{tasks.length}</span>}
          </h2>

          {
            // Toggle task list header icon depending if the menuEnabled is true
            !this.state.menuEnabled 
            ? 
            <>
              <label htmlFor={`taskListAddBtn--${status}`} className="srOnly">Click the button to toggle the add new task form</label>
              <button id={`taskListAddBtn--${status}`} onClick={toggleTaskStaging} className={`btn taskList__addBtn`} disabled={this.state.isStaging ? 'disabled' : ''}>+ Task</button>
            </>
            : 
            <>
              <label htmlFor={`taskListClearBtn--${status}`} className="srOnly">Click the button to clear the task list's items</label>
              <button id={`taskListClearBtn--${status}`} onClick={handleClearList} className={`btn btn--black taskList__clearBtn`} disabled={tasks.length ? '' : 'disabled' }>Clear List</button>
            </>
          }
          
          
        </div>
        <ul className="taskList__list">
          { 
          // render a TaskForm to add a new task for the task list
            this.state.isStaging && 
            <li className={`taskItem taskItem--${status}`}>
              <TaskForm 
                id={status}
                taskValue={stagingTask}
                handleSubmit={handleAddTask}
                toggleForm={toggleTaskStaging}
                handleBlur={handleBlur}
                handleChange={handleStagingTask}
                handleClear={clearStagingTask}
              />
            </li>
          }
          { 
          // render the taskform items for the list
            this.props.tasks.map(({key, task, status}) => (
              <TaskItem 
                key={key} 
                id={key} 
                task={task} 
                status={status} 
                editTask={editTask}
                removeTask={removeTask} 
                moveTask={moveTask} 
              />)
            )
          }
        </ul>
      </div>
    )

  }

}
export default TaskList;