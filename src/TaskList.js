import React from 'react';
import TaskItem from './TaskItem';

const TaskList = props => {
  return(
    <div>
      <h2>{props.children}</h2>
      <ul className="TaskList">
        { 
          props.tasks.map(({key, task, status}) => (
            <TaskItem 
              key={key} 
              id={key} 
              task={task} 
              status={status} 
              removeTask={props.removeTask} 
              moveTask={props.moveTask} />)
          )
        }
      </ul>
    </div>
  )
}

export default TaskList;