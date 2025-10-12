import autosize from "autosize";
import React, { useEffect, useState } from "react";
import { useTasks } from "../contexts/TasksContext";

import { TaskStatus } from "../types/task.type";
import { useUser } from "../contexts/UserContext";

export type TaskFormProps =
  | {
      status: TaskStatus;
      type: "staging";
      taskValue?: string;
      closeForm: () => void;
    }
  | {
      id: number;
      type: "edit";
      taskValue?: string;
      closeForm: () => void;
    };

const TaskForm = (props: TaskFormProps) => {
  const { type, taskValue, closeForm } = props;
  const { createNewTask, modifyTask, removeTask } = useTasks();
  const { user } = useUser();

  const formId = type === "staging" ? props.status : props.id;

  const [taskInput, setTaskInput] = useState(taskValue || "");

  // --------------------------- useEffect
  useEffect(() => {
    const textInput = document.querySelector(
      `#taskFormInput_${formId}`,
    ) as HTMLTextAreaElement;

    // only go to the end of the text if the input is not already focused
    if (textInput && textInput !== document.activeElement) {
      // autosize the textarea height as needed
      autosize(textInput);

      // set the cursor to the end of the text input by setting value to "" > focus > value back to state.stagingTask
      textInput.value = "";
      // focus on the input
      textInput.focus();
      // set the input value
      textInput.value = taskInput;
    }
  }, [formId, taskInput]);

  const handleBlur = (evt: React.SyntheticEvent) => {
    // implementation from https://gist.github.com/pstoica/4323d3e6e37e8a23dd59
    const currentTarget = evt.currentTarget;

    // Check the newly focused element in the next tick of the event loop
    setTimeout(() => {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        // if new focused element is not contained in the form ... toggle out of staging a task
        closeForm();
      }
    }, 5);
  };

  const handleTaskInputChange = (
    evt: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTaskInput(evt.target.value);
  };

  const handleClear = () => setTaskInput("");

  const handleRemoveTask = async (taskId: number) => {
    await removeTask(taskId);

    closeForm();
  };

  const handleUpdateTask = async (taskId: number) => {
    await modifyTask({
      id: taskId,
      description: taskInput,
    });

    closeForm();
  };

  async function handleOnSubmit(evt: React.SyntheticEvent) {
    evt.preventDefault();

    if (type === "edit") {
      await handleUpdateTask(props.id);
    } else {
      await createNewTask({
        description: taskInput,
        status: props.status,
        ownerId: user?.id ?? null,
      });
    }

    closeForm();
  }

  return (
    <>
      <h3 className="taskForm__heading">
        {type === "edit" ? "Edit Task" : "New Task"}
      </h3>
      <form
        action="#"
        onSubmit={handleOnSubmit}
        onBlur={handleBlur}
        className="taskForm"
      >
        <label htmlFor={`taskFormInput_${formId}`} className="srOnly">
          Task Item
        </label>
        <textarea
          className="taskForm__input"
          id={`taskFormInput_${formId}`}
          name="taskFormInput"
          onChange={handleTaskInputChange}
          value={taskInput}
        ></textarea>

        {
          // if there is input, display button to clear the text
          taskInput && (
            <>
              <label htmlFor={`taskBtn__clear--${formId}`} className="srOnly">
                Clear task input
              </label>
              <button
                id={`taskBtn__clear--${formId}`}
                type="button"
                onClick={handleClear}
                className="btn btn--black"
              >
                Clear
              </button>
            </>
          )
        }

        {
          // if in editing mode, display button to delete the task
          type === "edit" && (
            <>
              <label htmlFor={`taskBtn__delete--${formId}`} className="srOnly">
                Delete task
              </label>
              <button
                id={`taskBtn__delete--${formId}`}
                type="button"
                onClick={() => handleRemoveTask(props.id)}
                className="btn btn--red"
              >
                Delete
              </button>
            </>
          )
        }

        {/* Save task button */}
        <label htmlFor={`taskBtn__save--${formId}`} className="srOnly">
          Save task input
        </label>
        <button
          id={`taskBtn__save--${formId}`}
          className="btn btn--green"
          disabled={taskInput.length === 0}
        >
          {type === "edit" ? "Save" : "Add"}
        </button>
      </form>
    </>
  );
};

export default TaskForm;
