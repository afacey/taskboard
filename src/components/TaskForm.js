import React from 'react';

const TaskForm = props => {
  const { id, type, handleSubmit, handleBlur, handleChange, addTask, taskValue, removeTask, toggleForm } = props;

  return (
    <>
    <h3 className="taskForm__heading">{type === 'edit' ? 'Edit Task' : 'New Task'}</h3>
    <form action="#" onSubmit={handleSubmit} onBlur={handleBlur} className="taskForm">
      <textarea className="taskForm__input" id={`taskFormInput_${id}`} name="taskFormInput" onChange={handleChange} value={taskValue}></textarea>
      {type === "edit" && <button type="button" onClick={removeTask} className="btn btn--red">Delete</button>}
      <button type="button" onClick={toggleForm} className="btn btn--black">Cancel</button>
      {type === "add" && <button type="button" onClick={addTask} className="btn__task btn__task--add">Add</button>}
      <button className="btn btn--green" disabled={taskValue ? "" : "disabled"}>Save</button>
    </form>  
    </>
  );
}

export default TaskForm;