import React from "react";
import { filterTaskItems } from "../util";
import TaskList from "./TaskList";
import { useTasks } from "../stores/Tasks.store";

const TaskLists: React.FC = () => {
  const { taskItems, taskStatuses, searchTerms, listFilter } = useTasks();

  let filteredItems = taskItems;

  if (searchTerms !== undefined && taskItems.length) {
    filteredItems = filterTaskItems(searchTerms, taskItems);
  }

  const lists = listFilter === "all" ? taskStatuses : [listFilter];

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
