import * as React from 'react';
import { TasksContext } from '../contexts/TasksContext';
import TaskList from './TaskList';

const TaskLists: React.FC = () => {
  const { taskItems, taskStatus } = React.useContext(TasksContext);

  return (
    <section className="taskLists">
      { 
        taskStatus && taskStatus.map((status) => {
          const tasks = taskItems ? taskItems.filter(task => task.status === status) : [];
          return (
            <TaskList 
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