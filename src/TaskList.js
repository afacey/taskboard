import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStaging: false,
      stagingTask: "",
    }
  }

  toggleTaskStaging = () => {
    this.setState({isStaging: !this.state.isStaging});
  }

  handleStagingTask = (e) => {
    this.setState({stagingTask: e.target.value})
  }

  handleAddTask = (e) => {
    e.preventDefault();

    if (this.state.stagingTask) {
      this.props.addTask({
        task: this.state.stagingTask,
        status: this.props.status
      })

      this.setState({isStaging: false, stagingTask: ""});
    }
    
  }
  
  render() {
    const { status, tasks, children, editTask, removeTask, moveTask } = this.props;
  
    return(
      <div className="taskList">
        <h2 className={`taskList__heading taskList__heading--${status} clearfix`}>
          {children} 
          {tasks.length > 0 && <span className="taskList__count">{tasks.length}</span>}
          <button onClick={this.toggleTaskStaging} className={`btn__taskList btn__taskList--add`}>+ Task</button>
          <button className="btn__taskList btn__taskList--menu"><FontAwesomeIcon icon={faEllipsisV} /></button>
        </h2>
        <ul className="taskList__list">
          { (this.state.isStaging || !tasks.length) && <li><form action="#" onSubmit={(e) => this.handleAddTask(e)}>
              <label htmlFor="task" className="sr-only">Add A New Task</label>
              {/* TODO remove autocomplete for submission */}
              <input onChange={this.handleStagingTask} type="text" name="task" id="task" placeholder="add a task" value={this.state.stagingTask} autoComplete="off"/>
              <button>Add Task!</button>
            </form></li>}
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