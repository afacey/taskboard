import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  createTask,
  deleteMany,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../services/task.service";
import { APIStatuses } from "../types/api.type";
import {
  NewTask,
  Task,
  TaskStatus,
  TaskStatusEnum,
  TaskStatusFilter,
  UpdateTaskRequest,
} from "../types/task.type";
import { useUser } from "./UserContext";
interface TasksContextData {
  taskStatus: TaskStatus[];
  taskItems: Task[];
  numOfTasks: number;
  loadComplete: boolean;
  searchTerms: string;
  listFilter: TaskStatusFilter;
  setSearchTerms: (searchTerms: string) => void;
  setListFilter: (filter: TaskStatusFilter) => void;
  createNewTask: (newTask: NewTask) => Promise<void>;
  removeTask: (id: number) => Promise<void>;
  removeManyTasks: (ids: number[]) => Promise<void>;
  modifyTask: (task: UpdateTaskRequest) => Promise<void>;
}

export const TasksContext = createContext<TasksContextData | null>(null);

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const [loadComplete, setLoadComplete] = useState(false);
  const [taskItems, setTaskItems] = useState<Task[]>([]);
  const { checkForUser, user } = useUser();

  const [listFilter, setListFilter] = useState<TaskStatusFilter>("all");
  const [searchTerms, setSearchTerms] = useState<string>("");

  const taskStatus: TaskStatus[] = [
    TaskStatusEnum.Todo,
    TaskStatusEnum.InProgress,
    TaskStatusEnum.Completed,
  ];

  async function createNewTask(task: NewTask) {
    const result = await createTask(task);

    if (result.status === APIStatuses.Success) {
      addTaskToTaskItems(result.data);
    }
  }

  async function removeTask(id: number) {
    const result = await deleteTask(id);

    if (result.status === APIStatuses.Success) {
      removeTaskFromTaskItems(id);
    }
  }

  async function modifyTask(task: UpdateTaskRequest) {
    const result = await updateTask(task);

    if (result.status === APIStatuses.Success) {
      updateTaskFromTaskItems(result.data);
    }
  }

  function updateTaskFromTaskItems(updatedTask: Task) {
    setTaskItems((current) =>
      current.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }

        return task;
      }),
    );
  }

  async function removeManyTasks(ids: number[]) {
    const result = await deleteMany(ids);

    if (result.status === APIStatuses.Success) {
      removeManyTaskFromTaskItems(ids);
    }
  }

  function removeTaskFromTaskItems(id: number) {
    setTaskItems((current) => current.filter((task) => task.id !== id));
  }

  function removeManyTaskFromTaskItems(ids: number[]) {
    setTaskItems((current) => current.filter((task) => !ids.includes(task.id)));
  }

  function addTaskToTaskItems(task: Task) {
    setTaskItems((current) => [...current, task]);
  }

  // --------------------------- retrieveTaskItems
  // const fetchTasks = () => {};

  // retreive tasks once userCheck is true
  useEffect(
    function fetchTasksAfterUserCheck() {
      if (!checkForUser) {
        getAllTasks(user?.id)
          .then((result) => {
            if (result.status === "Success") {
              setTaskItems(result.data);
            }
          })
          .finally(() => setLoadComplete(true));
      }
    },
    [checkForUser, user],
  );

  const value = {
    taskStatus,
    taskItems,
    numOfTasks: taskItems.length,
    loadComplete,
    searchTerms,
    listFilter,
    setSearchTerms,
    setListFilter,
    createNewTask,
    removeTask,
    modifyTask,
    removeManyTasks,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw Error("`useTasks` must be used within the `TaskContext.Provider`");
  }

  return context;
}

export default TasksProvider;
