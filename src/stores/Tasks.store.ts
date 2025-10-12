import { create } from "zustand";
import {
  createTask,
  deleteMany,
  deleteTask,
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
