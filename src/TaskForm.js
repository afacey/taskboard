import React from 'react';

const TaskForm = props => {
  const { id, type, handleSubmit, handleBlur, handleChange, addTask, taskValue, removeTask, toggleForm } = props;

  return (
    <form action="#" onSubmit={handleSubmit} onBlur={handleBlur} className="clearfix">
      {/* TODO remove autocomplete for submission */}
      <textarea className="taskItem__editInput" id={`taskEdit_${id}`} name="taskEdit" onChange={handleChange} value={taskValue}>
      </textarea>
      {type === "edit" && <button type="button" onClick={removeTask} className="btn__task btn__task--delete">Delete</button>}
      <button type="button" onClick={toggleForm} className="btn__task btn__task--edit">Cancel</button>
      <button className="btn__task btn__task--save">Save</button>
      {type === "add" && <button type="button" onClick={addTask} className="btn__task btn__task--add">Add</button>}
    </form>  
  );
}

export default TaskForm;