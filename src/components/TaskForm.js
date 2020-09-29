import React from 'react';

const TaskForm = props => {
  const { id, type, handleSubmit, handleBlur, handleChange, addTask, taskValue, removeTask, toggleForm } = props;

  return (
    <form action="#" onSubmit={handleSubmit} onBlur={handleBlur} className="taskForm clearfix">
      {/* TODO remove autocomplete for submission */}
    
    {/* TODO keep textarea or text input? */}
    {/* <input className="taskForm__input" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleChange} value={taskValue} /> */}

    <textarea className="taskForm__input taskForm__input--multiline" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleChange} value={taskValue}></textarea>
      <button className="btn btn--green">Save</button>
      <button type="button" onClick={toggleForm} className="btn btn--orange">Cancel</button>
      {type === "add" && <button type="button" onClick={addTask} className="btn__task btn__task--add">Add</button>}
      {type === "edit" && <button type="button" onClick={removeTask} className="btn btn--red">Delete</button>}
    </form>  
  );
}

export default TaskForm;