import React, { useState } from 'react';
import TaskForm from './TaskForm.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const TaskItem = ({id, task, status, moveTask}) => {
  const [ isEditing, setIsEditing ] = useState(false);

  // --------------------------- handleMovePrev
  const handleMovePrev = () => moveTask(id, status, -1);
  // --------------------------- handleMoveNext
  const handleMoveNext = () => moveTask(id, status, 1);

  // --------------------------- toggleEdit
  // check if taskFormInput has a value (not cleared by user)
  const toggleEdit = () => { setIsEditing(!isEditing); } 

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
            taskValue={task}
            setIsEditing={setIsEditing}
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