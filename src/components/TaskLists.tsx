import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { filterTaskItems } from '../util';
import TaskList from './TaskList';

const TaskLists: React.FC = () => {
  const { taskItems, taskStatus, searchTerms } = useContext(TasksContext);
  const [filteredItems, setFilteredItems] = useState(taskItems || [])

  useEffect(() => {
    if (searchTerms !== undefined && taskItems?.length) {
      const filteredItems = filterTaskItems(searchTerms, taskItems)
      setFilteredItems(filteredItems)
    }
  }, [searchTerms, taskItems])

  return (
    <section className="taskLists">
      { 
        taskStatus && taskStatus.map((status) => {
          const tasks = filteredItems ? filteredItems.filter(task => task.status === status) : [];
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