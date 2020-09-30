import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faTimes } from '@fortawesome/free-solid-svg-icons';
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
    const input = document.querySelector(`#taskFormInput_${this.props.status}`);
    if (input) {
      autosize(input);
      input.focus();
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
        // TODO add comment 
        // You can invoke a callback or add custom logic here
        this.setState({isStaging: false});
      }
    }, 0);
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
    
    if (tasks.length) {

      const taskListItems = 
      tasks
        .filter(task => task.status === status)
        .reduce(((deleteList, taskItem) => { 
          deleteList[taskItem.key] = null;
          return deleteList;
        }), {});
      
      clearTaskList(taskListItems, status)  
    }
    
    this.setState({menuEnabled: false});
  }
  
  // --------------------------- render
  render() {
    const { status, statusString, tasks, editTask, removeTask, moveTask } = this.props;

    return(
      <div className="taskList">
        <div className={`taskList__header taskList__header--${status}`}>
          <label htmlFor="taskListMenuBtn" className="srOnly">Click the button to toggle the task list menu to clear the task list's items</label>
          <button 
            id="taskListMenuBtn" className={this.state.menuEnabled ? "btn taskList__menuBtn taskList__menuBtn--active" : "btn taskList__menuBtn" } 
            onClick={this.toggleMenuEnabled}>
            {!this.state.menuEnabled ? <FontAwesomeIcon icon={faEllipsisV} /> : <FontAwesomeIcon icon={faTimes} /> }  
          </button>
          
          <h2 className="taskList__headingText">
            {statusString} 
            {tasks.length > 0 && <span className="taskList__count">{tasks.length}</span>}
          </h2>

          {
            !this.state.menuEnabled 
            ? 
            <>
              <label htmlFor="taskListAddBtn" className="srOnly">Click the button to toggle the add new task form</label>
              <button id="taskListAddBtn" onClick={this.toggleTaskStaging} className={`btn taskList__addBtn`}>+ Task</button>
            </>
            : 
            <>
              <label htmlFor="taskListClearBtn" className="srOnly">Click the button to clear the task list's items</label>
              <button onClick={this.handleClearList} className={`btn btn--black taskList__clearBtn`} disabled={tasks.length ? '' : 'disabled' }>Clear List</button>
            </>
          }
          
          
        </div>
        <ul className="taskList__list">
          { 
            this.state.isStaging && 
            <li className={`taskItem taskItem--${status}`}>
              <TaskForm 
                id={status}
                taskValue={this.state.stagingTask}
                handleSubmit={this.handleAddTask}
                toggleForm={this.toggleTaskStaging}
                handleBlur={this.handleBlur}
                handleChange={this.handleStagingTask}
              />
            </li>
          }
          { 
            this.props.tasks.map(({key, task, status}) => (
              <TaskItem 
                key={key} 
                id={key} 
                task={task} 
                status={status} 
                editTask={editTask}
                removeTask={removeTask} 
                moveTask={moveTask} />)
            )
          }
        </ul>
      </div>
    )

  }

}
export default TaskList;