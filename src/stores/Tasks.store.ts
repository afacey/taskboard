import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { create } from "zustand";
import {
  createTask,
  deleteMany,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../services/task.service";
import { useUser } from "../stores/User.store";
import { APIStatuses } from "../types/api.type";
import {
  NewTask,
  Task,
  TaskStatus,
  TaskStatusEnum,
  TaskStatusFilter,
  UpdateTaskRequest,
} from "../types/task.type";
interface TasksState {
  taskStatuses: TaskStatus[];
  taskItems: Task[];
  numOfTasks: number;
  loadComplete: boolean;
  searchTerms: string;
  listFilter: TaskStatusFilter;
}

export const useTasks = create<TasksState>()(() => ({
  taskStatuses: [
    TaskStatusEnum.Todo,
    TaskStatusEnum.InProgress,
    TaskStatusEnum.Completed,
  ],
  taskItems: [],
  numOfTasks: 0,
  loadComplete: false,
  searchTerms: "",
  listFilter: "all",
}));

export function setTaskItems(taskItems: Task[]) {
  useTasks.setState(() => ({ taskItems }));
}

export function setTaskLoaded() {
  useTasks.setState(() => ({ loadComplete: true }));
}

export function setTaskSearchTerms(searchTerms: string) {
  useTasks.setState(() => ({ searchTerms }));
}

export function setTaskStatusFilter(listFilter: TaskStatusFilter) {
  useTasks.setState(() => ({ listFilter }));
}

export async function createNewTask(task: NewTask) {
  const result = await createTask(task);

  if (result.status === APIStatuses.Success) {
    addTaskToTaskItems(result.data);
  }
}

export async function removeTask(id: number) {
  const result = await deleteTask(id);

  if (result.status === APIStatuses.Success) {
    removeTaskFromTaskItems(id);
  }
}

export async function modifyTask(task: UpdateTaskRequest) {
  const result = await updateTask(task);

  if (result.status === APIStatuses.Success) {
    updateTaskFromTaskItems(result.data);
  }
}

export function updateTaskFromTaskItems(updatedTask: Task) {
  useTasks.setState(({ taskItems }) => {
    const updatedTaskList = taskItems.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }

      return task;
    });

    return {
      taskItems: updatedTaskList,
    };
  });
}

export async function removeManyTasks(ids: number[]) {
  const result = await deleteMany(ids);

  if (result.status === APIStatuses.Success) {
    removeManyTaskFromTaskItems(ids);
  }
}

export function removeTaskFromTaskItems(id: number) {
  useTasks.setState(({ taskItems }) => ({
    taskItems: taskItems.filter((task) => task.id !== id),
  }));
}

export function removeManyTaskFromTaskItems(ids: number[]) {
  useTasks.setState(({ taskItems }) => ({
    taskItems: taskItems.filter((task) => !ids.includes(task.id)),
  }));
}

export function addTaskToTaskItems(task: Task) {
  useTasks.setState(({ taskItems }) => ({ taskItems: [...taskItems, task] }));
}

export function clearTaskboard() {
  const taskIds = useTasks.getState().taskItems.map(({ id }) => id);

  removeManyTasks(taskIds);
}

export const TasksContext = createContext<TasksState | null>(null);

export const TasksProvider = ({ children }: PropsWithChildren) => {
  const [loadComplete, setLoadComplete] = useState(false);
  const [taskItems, setTaskItems] = useState<Task[]>([]);
  const userInitialized = useUser((state) => state.userInitialized);
  const user = useUser((state) => state.user);

  const [listFilter, setListFilter] = useState<TaskStatusFilter>("all");
  const [searchTerms, setSearchTerms] = useState<string>("");

  const taskStatus: TaskStatus[] = [
    TaskStatusEnum.Todo,
    TaskStatusEnum.InProgress,
    TaskStatusEnum.Completed,
  ];

  // retreive tasks once userCheck is true
  useEffect(
    function fetchTasksAfterUserCheck() {
      if (userInitialized) {
        getAllTasks(user?.id)
          .then((result) => {
            if (result.status === "Success") {
              setTaskItems(result.data);
            }
          })
          .finally(() => setLoadComplete(true));
      }
    },
    [userInitialized, user],
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
    clearTaskboard,
  };
};
