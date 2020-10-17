import React from 'react';

const TaskForm = props => {
  const { id, type, handleSubmit, handleBlur, handleChange, handleClear, taskValue, removeTask } = props;

  return (
    <>
      <h3 className="taskForm__heading">{type === 'edit' ? 'Edit Task' : 'New Task'}</h3>
      <form action="#" onSubmit={handleSubmit} onBlur={handleBlur} className="taskForm">
        <label htmlFor={`taskFormInput_${id}`} className="srOnly">Task Item</label>
        <textarea className="taskForm__input" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleChange} value={taskValue}></textarea>
        
        {
        // if there is input, display button to clear the text
        taskValue &&
          <>
            <label htmlFor={`taskBtn__clear--${id}`} className="srOnly">Clear task input</label>
            <button id={`taskBtn__clear--${id}`} type="button" onClick={handleClear} className="btn btn--black">Clear</button>
          </>  
        }
        
        {
        // if in editing mode, display button to delete the task
        type === "edit" && 
          <>
            <label htmlFor={`taskBtn__delete--${id}`} className="srOnly">Delete task</label>
            <button id={`taskBtn__delete--${id}`} type="button" onClick={removeTask} className="btn btn--red">Delete</button>
          </>
        }
        
        {/* Save task button */}
        <label htmlFor={`taskBtn__save--${id}`} className="srOnly">Save task input</label>
        <button id={`taskBtn__save--${id}`} className="btn btn--green" disabled={taskValue ? "" : "disabled"}>Save</button>
      </form>  
    </>
  );
}

export default TaskForm;