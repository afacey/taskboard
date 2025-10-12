import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";

import { Task, TaskStatus, TaskStatusEnum } from "../types/task.type";
import { removeManyTasks, useTasks } from "../stores/Tasks.store";

interface TaskListProps {
  status: TaskStatus;
  tasks: Task[];
}

// heading text for task status lists
const statusString = {
  [TaskStatusEnum.Todo]: "Todo",
  [TaskStatusEnum.InProgress]: "In Progress",
  [TaskStatusEnum.Completed]: "Completed",
};

const TaskList: React.FC<TaskListProps> = ({ status, tasks }) => {
  const [isStaging, setIsStaging] = useState(false);
  const [menuEnabled, setMenuEnabled] = useState(false);

  // --------------------------- toggleMenuEnabled
  const toggleMenuEnabled = () => setMenuEnabled((menuEnabled) => !menuEnabled);

  const toggleTaskStaging = () => setIsStaging((isStaging) => !isStaging);

  // --------------------------- handleClearList
  const handleClearList = async () => {
    const taskIds = tasks.map((task) => task.id);

    await removeManyTasks(taskIds);

    setMenuEnabled(false);
  };

  // --------------------------- return

  return (
    <div className="taskList">
      <div className={`taskList__header taskList__header--${status}`}>
        <label htmlFor={`taskListMenuBtn--${status}`} className="srOnly">
          Click the button to toggle the task list menu to clear the task list's
          items
        </label>
        <button
          id={`taskListMenuBtn--${status}`}
          className={
            menuEnabled
              ? "btn taskList__menuBtn taskList__menuBtn--active"
              : "btn taskList__menuBtn"
          }
          onClick={toggleMenuEnabled}
        >
          <span className="srOnly">Toggle the task list's menu</span>
          {!menuEnabled ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faTimes} />
          )}
        </button>

        <h2 className="taskList__headingText">
          {/* Task List Name */}
          {statusString[status]}
          {/* Task List Item Counter */}
          {tasks.length > 0 && (
            <span className="taskList__count">{tasks.length}</span>
          )}
        </h2>

        {
          // Toggle task list header icon depending if the menuEnabled is true
          !menuEnabled ? (
            <>
              <label htmlFor={`taskListAddBtn--${status}`} className="srOnly">
                Click the button to toggle the add new task form
              </label>
              <button
                id={`taskListAddBtn--${status}`}
                onClick={toggleTaskStaging}
                className={`btn taskList__addBtn`}
                disabled={isStaging}
              >
                Add Task
              </button>
            </>
          ) : (
            <>
              <label htmlFor={`taskListClearBtn--${status}`} className="srOnly">
                Click the button to clear the task list's items
              </label>
              <button
                id={`taskListClearBtn--${status}`}
                onClick={handleClearList}
                className={`btn btn--black taskList__clearBtn`}
                disabled={tasks.length === 0}
              >
                Clear List
              </button>
            </>
          )
        }
      </div>
      <ul className="taskList__list">
        {
          // render a TaskForm to add a new task for the task list
          isStaging && (
            <li className={`taskItem taskItem--${status}`}>
              <TaskForm
                type="staging"
                status={status}
                closeForm={() => setIsStaging(false)}
              />
            </li>
          )
        }
        {
          // render the taskform items for the list
          tasks.map(({ id, description: task, status }) => (
            <TaskItem key={id} id={id} task={task} status={status} />
          ))
        }
      </ul>
    </div>
  );
};
export default TaskList;
