import React from 'react';

const TaskForm = props => {
  const { id, isMultiLine, type, handleSubmit, handleBlur, handleChange, handleMultiLine, addTask, taskValue, removeTask, toggleForm } = props;

  return (
    <form action="#" onSubmit={handleSubmit} onBlur={handleBlur} className="taskForm clearfix">
      {/* TODO remove autocomplete for submission */}

      { 
      isMultiLine 
      ? 
      <textarea className="taskForm__input taskForm__input--multiline" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleChange} value={taskValue}></textarea>
      :
      <input className="taskForm__input" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleChange} value={taskValue} />
    }
      <div className="inputContainer">
        <input type="checkbox" name="isMultiLine" id="isMultiLine" onChange={handleMultiLine} defaultChecked={isMultiLine ? "checked" : ""}/>
        <label htmlFor="isMultiLine">Multiline</label>
      </div>

      <button className="btn btn--green">Save</button>
      <button type="button" onClick={toggleForm} className="btn btn--orange">Cancel</button>
      {type === "add" && <button type="button" onClick={addTask} className="btn__task btn__task--add">Add</button>}
      {type === "edit" && <button type="button" onClick={removeTask} className="btn btn--red">Delete</button>}
    </form>  
  );
}

export default TaskForm;