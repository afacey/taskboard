import React from 'react';
import TaskItem from './TaskItem';

const TaskList = props => {
  return(
    <div>
      <h2>{props.children} {props.tasks.length > 0 && <span>: {props.tasks.length}</span>}</h2>
      <ul className="">
        { 
          props.tasks.map(({key, task, status}) => (
            <TaskItem 
              key={key} 
              id={key} 
              task={task} 
              status={status} 
              editTask={props.editTask}
              removeTask={props.removeTask} 
              moveTask={props.moveTask} />)
          )
        }
      </ul>
    </div>
  )
}

export default TaskList;