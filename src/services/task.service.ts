import { TaskServiceBaseUrl } from "../config";
import { APIStatuses } from "../types/api.types";
import { NewTask, Task, UpdateTaskRequest } from "../types/task";

export async function getAllTasks() {
  try {
    const response = await fetch(TaskServiceBaseUrl);

    if (!response.ok) {
      return { status: APIStatuses.API_Error, response };
    }

    const tasks: Task[] = await response.json();

    return { status: APIStatuses.Success, data: tasks };
  } catch (error) {
    return { status: APIStatuses.Unknown_Error };
  }
}

export async function createTask(task: NewTask) {
  try {
    const response = await fetch(TaskServiceBaseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      return { status: APIStatuses.API_Error, response };
    }

    const newTask: Task = await response.json();

    return { status: APIStatuses.Success, data: newTask };
  } catch (error) {
    return { status: APIStatuses.Unknown_Error };
  }
}

export async function updateTask(task: UpdateTaskRequest) {
  try {
    const response = await fetch(`${TaskServiceBaseUrl}/${task.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    if (!response.ok) {
      return { status: APIStatuses.API_Error, response };
    }

    const updatedTask: Task = await response.json();

    return { status: APIStatuses.Success, data: updatedTask };
  } catch (error) {
    return { status: APIStatuses.Unknown_Error };
  }
}

export async function deleteTask(taskId: number) {
  try {
    const response = await fetch(`${TaskServiceBaseUrl}/${taskId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return { status: APIStatuses.API_Error, response };
    }

    const deletedTaskId: number = await response.json();

    return { status: APIStatuses.Success, data: deletedTaskId };
  } catch (error) {
    return { status: APIStatuses.Unknown_Error };
  }
}

export async function deleteMany(ids: number[]) {
  try {
    const response = await fetch(`${TaskServiceBaseUrl}/bulk-delete`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        ids,
      }),
    });

    if (!response.ok) {
      return { status: APIStatuses.API_Error, response };
    }

    return { status: APIStatuses.Success };
  } catch (error) {
    return { status: APIStatuses.Unknown_Error };
  }
}
