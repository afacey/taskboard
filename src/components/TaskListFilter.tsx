import React from "react";
import { TaskStatusEnum } from "../types/task.type";
import { setTaskStatusFilter } from "../stores/Tasks.store";

export default function TaskListFilter() {
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
          onChange={() => setTaskStatusFilter("all")}
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
          onChange={() => setTaskStatusFilter(TaskStatusEnum.Todo)}
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
          onChange={() => setTaskStatusFilter(TaskStatusEnum.InProgress)}
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
          onChange={() => setTaskStatusFilter(TaskStatusEnum.Completed)}
        />
        <label className="btn btn--green" htmlFor="filterComplete">
          Complete
        </label>
      </div>
    </fieldset>
  );
}
