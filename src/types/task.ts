export interface Task {
  id: string;
  key: string;
  status: TaskStatus;
  task: string;
}

export type TaskStatus = "open" | "inProgress" | "complete";

export type TaskListFilter = "all" | TaskStatus;