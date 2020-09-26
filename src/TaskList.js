import React from 'react';
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const TaskList = props => {
  return(
    <div className="taskList">
      <h2 className={props.status + " clearfix"}>
        {props.children} 
        {props.tasks.length > 0 && <span>({props.tasks.length})</span>}
        {/* <button className="btn__taskList">+ Add Task</button> */}
      </h2>
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
        <button className="btn__taskList"><FontAwesomeIcon icon={faPlus} size="2x" /></button>
      </ul>
    </div>
  )
}

export default TaskList;