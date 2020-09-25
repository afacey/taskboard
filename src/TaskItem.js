import React from 'react';

const TaskItem = props => {
  const { id, task, status } = props;

  // const moveTask = () => props.moveTask(id, status);
  const removeTask = () => props.removeTask(id);

  return(
    <>
    <li>{task}</li>
    { 
      status !== 'new' && <button onClick={ () => props.moveTask(id, status, -1)}>
      <span role="img" aria-label="move task to previous status">⬅️</span>
      </button>
    }
    <button onClick={removeTask}><span role="img" aria-label="delete task">❌</span></button>
    { status !== 'complete' && <button onClick={ () => props.moveTask(id, status, 1)}>
      <span role="img" aria-label="move task to next status">➡️</span>
      </button>}
    </>

  ) 
}

export default TaskItem;