import React from 'react';
import TaskItem from './TaskItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faEllipsisV } from '@fortawesome/free-solid-svg-icons'
const TaskList = props => {
  const { status, tasks, children } = props;
  return(
    <div className="taskList">
      <h2 className={`taskList__heading taskList__heading--${status} clearfix`}>
        {children} 
        {tasks.length > 0 && <span class="taskList__count">{tasks.length}</span>}
        <button className={`btn__taskList btn__taskList--add`}>+ Task</button>
        <button className="btn__taskList btn__taskList--menu"><FontAwesomeIcon icon={faEllipsisV} /></button>
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
      </ul>
    </div>
  )
}

export default TaskList;