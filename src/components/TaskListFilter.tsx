import React from "react";
import { useTasks } from "../contexts/TasksContext";
import { TaskStatusEnum, TaskStatusFilter } from "../types/task";

export default function TaskListFilter() {
  const { setListFilter } = useTasks();

  const changeListFilter = (filter: TaskStatusFilter) => {
    if (setListFilter) {
      setListFilter(filter);
    }
  };

  return (
    <fieldset className="taskBoard__listFilter">
      <div className="inputContainer__filter">
        <legend className="srOnly">Filter the task items by list</legend>
        <input
          type="radio"
          className="srOnly taskBoard__filterInput"
          name="listFilter"
          id="filterAll"
          value="all"
          onChange={() => changeListFilter("all")}
          defaultChecked
        />
        <label className="btn btn--black" htmlFor="filterAll">
          All
        </label>

        <input
          type="radio"
          className="srOnly taskBoard__filterInput"
          name="listFilter"
          id="filterOpen"
          value="todo"
          onChange={() => changeListFilter(TaskStatusEnum.Todo)}
        />
        <label className="btn btn--red" htmlFor="filterOpen">
          Todo
        </label>

        <input
          type="radio"
          className="srOnly taskBoard__filterInput"
          name="listFilter"
          id="filterInProgress"
          value="inProgress"
          onChange={() => changeListFilter(TaskStatusEnum.InProgress)}
        />
        <label className="btn btn--blue" htmlFor="filterInProgress">
          In Progress
        </label>

        <input
          type="radio"
          className="srOnly taskBoard__filterInput"
          name="listFilter"
          id="filterComplete"
          value="complete"
          onChange={() => changeListFilter(TaskStatusEnum.Completed)}
        />
        <label className="btn btn--green" htmlFor="filterComplete">
          Complete
        </label>
      </div>
    </fieldset>
  );
}
