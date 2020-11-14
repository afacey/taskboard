import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import TaskList from './TaskList';

const TaskLists = () => {
  const { taskItems, taskStatus } = useContext(TasksContext);

  return (
    <section className="taskLists">
      { 
        taskStatus.map((status) => {
          const tasks = taskItems.filter(task => task.status === status);
          return (
            <TaskList 
              className="taskList" 
              key={status} 
              status={status}
              tasks={tasks} 
            />
          )
        })
      } 
    </section>
  )


}

export default TaskLists;