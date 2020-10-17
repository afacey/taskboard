import React, { Component} from 'react';
import TaskForm from './TaskForm.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import autosize from 'autosize';

class TaskItem extends Component {
  constructor(props) {
    super()

    this.state = {
      taskFormInput: props.task,
      isEditing: false,
    }
  }
  
  // --------------------------- componentDidUpdate
  componentDidUpdate() {
    const taskInput = document.querySelector(`#taskFormInput_${this.props.id}`);

    // only go to the end of the text if the input is not already focused
    if (taskInput && taskInput !== document.activeElement) {
      // autosize the textarea height as needed
      autosize(taskInput);

      // set the cursor to the end of the text input by setting value to "" > focus > value back to state.taskFormInput
      taskInput.value = "";
      // focus on the input
      taskInput.focus();
      // set the input value
      taskInput.value = this.state.taskFormInput;
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
        // if new focused element is not contained in the form ... toggle out of editing the task
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

  // --------------------------- handleEditSubmit
  handleEditSubmit = (evt) => {
    evt.preventDefault();

    if (this.state.taskFormInput.length) {
      this.props.editTask(this.props.id, this.state.taskFormInput);
    }
    
    this.setState({isEditing: false});
  }

  // --------------------------- handleMovePrev
  handleMovePrev = () => this.props.moveTask(this.props.id, this.props.status, -1);
  // --------------------------- handleMoveNext
  handleMoveNext = () => this.props.moveTask(this.props.id, this.props.status, 1);

  // --------------------------- removeTask
  removeTask = () => this.props.removeTask(this.props.id);
  
  // --------------------------- toggleEdit
  toggleEdit = () => {
    // check if taskFormInput has a value (not cleared by user)
    this.state.taskFormInput 
      ? this.setState({ isEditing: !this.state.isEditing }) 
      
      // if empty, reset state with task value handed down in prop
      : this.setState({
          isEditing: !this.state.isEditing,
          taskFormInput: this.props.task
        });
  } 

  // --------------------------- clearTask
  clearTask = () => { this.setState({taskFormInput: ""}); }

  // --------------------------- render
  render() {

    const { id, task, status } = this.props;
  
    return(
      <li className={`taskItem taskItem--${status}`} >
      
      {
        // If status is 'open' DO NOT render the "previous" status button
        status !== 'open' 
        &&
        <>
          <label htmlFor={`btnPrev--${id}`} className="srOnly">Move task to the previous status</label>
          <button id={`btnPrev--${id}`} className="taskItem__btn taskItem__btn--prev" onClick={this.handleMovePrev}>
            <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
            <span className="srOnly">Move task to the previous status</span>
          </button>
        </>
      }
    
    { 
      // if not in editing mode render the task as text ... otherwise render the task form to edit the task
      !this.state.isEditing 
        ? <>
            <label htmlFor={`taskItem--${id}`} className="srOnly">Click or focus on the text of the task to enter edit mode and modify or delete the task</label>
            <button id={`taskItem--${id}`} className="taskItem__text" onClick={this.toggleEdit} onFocus={this.toggleEdit}>{task}</button> 
          </>
        : <TaskForm 
            id={id}
            type="edit"
            handleSubmit={this.handleEditSubmit} 
            handleBlur={this.handleBlur} 
            handleChange={this.handleChange}
            taskValue={this.state.taskFormInput}
            removeTask={this.removeTask}
            toggleForm={this.toggleEdit}
            handleClear={this.clearTask}
          />
    }
      
    {
      // If status is 'complete' DO NOT render the "next" status button
      status !== "complete" 
      &&
      <>
        <label htmlFor={`btnNext--${id}`} className="srOnly">Move task to the previous status</label>
        <button id={`btnNext--${id}`} className="taskItem__btn taskItem__btn--next" onClick={this.handleMoveNext}>
          <FontAwesomeIcon icon={faChevronRight} aria-hidden="true"/>
          <span className="srOnly">Click to move task to the next status</span>
        </button>
      </>
    }
    </li>
    ) 
  }
}

export default TaskItem;