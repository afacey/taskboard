import React from "react";
import { useTasks } from "../contexts/TasksContext";
import { filterTaskItems } from "../util";
import TaskList from "./TaskList";

const TaskLists: React.FC = () => {
  const { taskItems, taskStatus, searchTerms, listFilter } = useTasks();

  let filteredItems = taskItems;

  if (searchTerms !== undefined && taskItems.length) {
    filteredItems = filterTaskItems(searchTerms, taskItems);
  }

  const lists = listFilter === "all" ? taskStatus : [listFilter];

  return (
    <section className="taskLists">
      {lists.map((status) => {
        const tasks = filteredItems.filter((task) => task.status === status);

        return <TaskList key={status} status={status} tasks={tasks} />;
      })}
    </section>
  );
};

export default TaskLists;
