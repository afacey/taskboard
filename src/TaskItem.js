import React from 'react';

const TaskItem = props => {
  const { id, task, status } = props;

  const moveTask = () => props.moveTask(id, status);
  const removeTask = () => props.removeTask(id);

  return(
    <>
    <li>{task}</li>
  { status !== 'complete' && <button onClick={moveTask}>Move</button> }
    <button onClick={removeTask}>Delete</button>
    </>

  ) 
}

export default TaskItem;