export type Task = {
  id: number;
  status: TaskStatus;
  description: string;
  ownerId: string | null;
};

export type UpdateTaskRequest = {
  id: number;
} & Partial<NewTask>;

export type NewTask = Omit<Task, "id">;

export const TaskStatusEnum = {
  Todo: "TODO",
  InProgress: "IN_PROGRESS",
  Completed: "COMPLETED",
} as const;

export type TaskStatus = (typeof TaskStatusEnum)[keyof typeof TaskStatusEnum];

export type TaskStatusFilter = "all" | TaskStatus;

export interface TaskDeleteList {
  [prop: string]: null;
}
