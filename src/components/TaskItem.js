import React, { Component} from 'react';
import TaskForm from './TaskForm.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import autosize, { update } from 'autosize';

class TaskItem extends Component {
  constructor(props) {
    super()

    this.state = {
      taskFormInput: props.task,
      isEditing: false,
      isMultiLine: props.isMultiLine,
    }
  }
  
  // --------------------------- componentDidUpdate
  componentDidUpdate() {
    const input = document.querySelector(`#taskFormInput_${this.props.id}`);
    if (input) {
      autosize(input);

      // set the cursor to the end of the text input by setting value to "" > focus > value back to state.taskFormInput
      input.value = "";
      input.focus();
      input.value = this.state.taskFormInput;
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
        this.setState({isEditing: false});
      }
    }, 0);
  }

  // --------------------------- handleChange
  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // --------------------------- handleMultiLine
  handleMultiLine = (e) => {
    const { isMultiLine } = this.state;
    console.log('mutli change');
    this.setState({isMultiLine: !isMultiLine});
  }

  // --------------------------- handleEditSubmit
  handleEditSubmit = (evt) => {
    evt.preventDefault();
    const { taskFormInput: task, isMultiLine } = this.state; 
    const updatedTask = {
      task: isMultiLine ? task : task.replaceAll('\n', ''),
      isMultiLine
    }
    // this.props.editTask(this.props.id, this.state.taskFormInput);
    this.props.editTask(this.props.id, updatedTask);
    this.setState({isEditing: false});
  }

  // --------------------------- handleMovePrev
  handleMovePrev = () => this.props.moveTask(this.props.id, this.props.status, -1);
  // --------------------------- handleMoveNext
  handleMoveNext = () => this.props.moveTask(this.props.id, this.props.status, 1);

  // --------------------------- removeTask
  removeTask = () => this.props.removeTask(this.props.id);
  
  // --------------------------- toggleEdit
  toggleEdit = () => this.setState({ isEditing: !this.state.isEditing });

  // --------------------------- render
  render() {

    const { id, task, status } = this.props;
  
    return(
      <li className={`taskItem taskItem--${status}`} >
      
      {
        status !== 'open' 
        &&
        <button className="taskItem__btn taskItem__btn--prev" onClick={this.handleMovePrev}>
          <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
          <span className="srOnly">Click to move task to the next status</span>
        </button>
      }
    
    { 
      !this.state.isEditing 
        ? <p className="taskItem__text" onClick={this.toggleEdit} onFocus={this.toggleEdit} tabIndex="0">{task}</p> 
        : <TaskForm 
            id={id}
            isMultiLine={this.state.isMultiLine}
            type="edit"
            handleSubmit={this.handleEditSubmit} 
            handleBlur={this.handleBlur} 
            handleChange={this.handleChange}
            taskValue={this.state.taskFormInput}
            removeTask={this.removeTask}
            toggleForm={this.toggleEdit}
            handleMultiLine={this.handleMultiLine}
          />
    }
      
    {
      status !== "complete" 
      &&
      <button className="taskItem__btn taskItem__btn--next" onClick={this.handleMoveNext}>
        <FontAwesomeIcon icon={faChevronRight} aria-hidden="true"/>
        <span className="srOnly">Click to move task to the next status</span>
      </button>
    }
    </li>
    ) 
  }
}

export default TaskItem;