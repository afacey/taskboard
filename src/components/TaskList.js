import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import autosize from 'autosize';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStaging: false,
      stagingTask: "",
    }
  }

  // --------------------------- componentDidUpdate
  componentDidUpdate() {
    const input = document.querySelector(`#taskEdit_${this.props.status}`);
    if (input) {
      autosize(input);
      input.focus();
    } 
  }

  // --------------------------- handleBlur
  handleBlur = (evt) => {
    // implementation from https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
    const currentTarget = evt.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
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
      this.props.addTask({
        task: this.state.stagingTask,
        status: this.props.status
      })
      // reset staging states
      this.setState({isStaging: false, stagingTask: ""});
    }
    
  }
  
  // --------------------------- render
  render() {
    const { status, tasks, children, editTask, removeTask, moveTask } = this.props;
  
    return(
      <div className="taskList">
        <h2 className={`taskList__heading taskList__heading--${status} clearfix`}>
          {/* TODO keep ellipsis button? */}
          {/* <button className="taskList__menuBtn"><FontAwesomeIcon icon={faEllipsisV} /></button> */}
          {children} 
          {tasks.length > 0 && <span className="taskList__count">{tasks.length}</span>}
          <button onClick={this.toggleTaskStaging} className={`btn taskList__addBtn`}>+ Task</button>
        </h2>
        <ul className="taskList__list">
          { 
            this.state.isStaging && 
            <li className={`taskItem taskItem--${status}`}>
              <h3>New Task</h3>
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