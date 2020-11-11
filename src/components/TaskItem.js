import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import autosize from 'autosize';

const TaskItem = ({id, task, status, editTask, moveTask, removeTask}) => {
  const [ taskFormInput, setTaskFormInput ] = useState(task);
  const [ isEditing, setIsEditing ] = useState(false);
  
  useEffect(() => {
    const taskInput = document.querySelector(`#taskFormInput_${id}`);

    // only go to the end of the text if the input is not already focused
    if (taskInput && taskInput !== document.activeElement) {
      // autosize the textarea height as needed
      autosize(taskInput);

      // set the cursor to the end of the text input by setting value to "" > focus > value back to state.taskFormInput
      taskInput.value = "";
      // focus on the input
      taskInput.focus();
      // set the input value
      taskInput.value = taskFormInput;
    } 

  })

  // --------------------------- handleBlur
  const handleBlur = (evt) => {
    // implementation from https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
    const currentTarget = evt.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // if new focused element is not contained in the form ... toggle out of staging a task
        setIsEditing(false);
      }
    }, 5);
  }

  // --------------------------- handleChange
  const handleChange = (evt) => { setTaskFormInput(evt.target.value); }

  // --------------------------- handleEditSubmit
  const handleEditSubmit = (evt) => {
    evt.preventDefault();

    if (taskFormInput.length) {
      editTask(id, taskFormInput);
    }
    
    setIsEditing(false);
  }

  // --------------------------- handleMovePrev
  const handleMovePrev = () => moveTask(id, status, -1);
  // --------------------------- handleMoveNext
  const handleMoveNext = () => moveTask(id, status, 1);

  // --------------------------- removeTask
  const handleRemoveTask = () => removeTask(id);
  
  // --------------------------- toggleEdit
  const toggleEdit = () => {
    // check if taskFormInput has a value (not cleared by user)
    if (taskFormInput) {
      setIsEditing(!isEditing);
    }
    // if empty, reset state with task value handed down in prop
    else {
      setIsEditing(!isEditing);
      setTaskFormInput(task);
    }  
  } 

  // --------------------------- clearTask
  const clearTask = () => { setTaskFormInput(""); }

  // --------------------------- return
    return(
      <li className={`taskItem taskItem--${status}`} >
      
      {
        // If status is 'open' DO NOT render the "previous" status button
        status !== 'open' 
        &&
        <>
          <label htmlFor={`btnPrev--${id}`} className="srOnly">Move task to the previous status</label>
          <button id={`btnPrev--${id}`} className="taskItem__btn taskItem__btn--prev" onClick={handleMovePrev}>
            <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
            <span className="srOnly">Move task to the previous status</span>
          </button>
        </>
      }
    
    { 
      // if not in editing mode render the task as text ... otherwise render the task form to edit the task
      !isEditing 
        ? <>
            <label htmlFor={`taskItem--${id}`} className="srOnly">Click or focus on the text of the task to enter edit mode and modify or delete the task</label>
            <button id={`taskItem--${id}`} className="taskItem__text" onClick={toggleEdit} onFocus={toggleEdit}>{task}</button> 
          </>
        : <TaskForm 
            id={id}
            type="edit"
            handleSubmit={handleEditSubmit} 
            handleBlur={handleBlur} 
            handleChange={handleChange}
            taskValue={taskFormInput}
            removeTask={handleRemoveTask}
            toggleForm={toggleEdit}
            handleClear={clearTask}
          />
    }
      
    {
      // If status is 'complete' DO NOT render the "next" status button
      status !== "complete" 
      &&
      <>
        <label htmlFor={`btnNext--${id}`} className="srOnly">Move task to the previous status</label>
        <button id={`btnNext--${id}`} className="taskItem__btn taskItem__btn--next" onClick={handleMoveNext}>
          <FontAwesomeIcon icon={faChevronRight} aria-hidden="true"/>
          <span className="srOnly">Click to move task to the next status</span>
        </button>
      </>
    }
    </li>
    ) 
  // }
}

export default TaskItem;