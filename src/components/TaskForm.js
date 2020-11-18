import React, { useContext, useState, useEffect } from 'react';
import autosize from 'autosize';
import {UserContext} from './../contexts/UserContext';
import { addTask, removeTask, updateTask } from './../firebase';

const TaskForm = props => {
  const { id, type, taskValue, toggleTaskForm } = props;
  const { user } = useContext(UserContext);
  
  const [ taskInput, setTaskInput ] = useState(taskValue || "")

    // --------------------------- Autosize the textarea input as it grows and set the cursor to the end of textarea input
    useEffect(() => {
      const textInput = document.querySelector(`#taskFormInput_${id}`);
  
      // only go to the end of the text if the input is not already focused
      if (textInput && textInput !== document.activeElement) {
        // autosize the textarea height as needed
        autosize(textInput);
  
        // set the cursor to the end of the text input by setting value to "" > focus > value back to taskValue
        textInput.value = "";
        // focus on the input
        textInput.focus();
        // set the input value
        textInput.value = taskInput;
      }
    }, [])

  // --------------------------- Bind input to state
  const handleTaskInputChange = evt => { setTaskInput(evt.target.value); }
  
  // --------------------------- Add Task
  const handleAddTask = () => { 
    const newTask = {
      task: taskInput,
      status: id // the task list's status is passed as the ID for the taks form
    }

    addTask(user.dbRef, newTask); 
    toggleTaskForm();
  }

  // --------------------------- Remove Task
  const handleRemoveTask = () => { removeTask(user.dbRef, id); }
  
  // --------------------------- Update Task
  const handleUpdateTask = () => {  updateTask(user.dbRef, id, taskInput, toggleTaskForm); }

  const handleBlur = evt => {
    // if the currently focused element is NOT contained within the form then close the form
    if (!evt.currentTarget.contains(evt.relatedTarget)) {
      toggleTaskForm();
    }
    // otherwise do nothing, preventing the form from closing when tab focusing on the task form buttons
  }

  return (
    <>
      <h3 className="taskForm__heading">{type === 'edit' ? 'Edit' : 'New'} Task</h3>

      <form action="#" onBlur={handleBlur} className="taskForm">
        <label htmlFor={`taskFormInput_${id}`} className="srOnly">Task Item</label>
        <textarea className="taskForm__input" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleTaskInputChange} value={taskInput}></textarea>

        {
        // if in editing mode, display button to delete the task
        type === "edit" 
        &&
          <>
            <label htmlFor={`taskBtn__delete--${id}`} className="srOnly">Delete task</label>
            <button id={`taskBtn__delete--${id}`} type="button" onMouseDown={handleRemoveTask} className="btn btn--red">Delete</button>
          </>
        }
        
        {/* Save (edit mode) or Add task button */}
        <label htmlFor={`taskBtn__save--${id}`} className="srOnly">{type === 'edit' ? 'Save' : 'Add'} task input</label>
        <button type="button" id={`taskBtn__save--${id}`} className="btn btn--green" onMouseDown={type === 'edit' ? handleUpdateTask : handleAddTask} disabled={taskInput ? "" : "disabled"}>{type === 'edit' ? 'Save' : 'Add'}</button>
        
      </form>  
    </>
  );
}

export default TaskForm;