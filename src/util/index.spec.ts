import { describe, expect, it } from "vitest";
import { filterTaskItems } from ".";
import { Task } from "../types/task.type";

describe("filterTaskItems", () => {
  it("should return empty array if there are no tasks", () => {
    const result = filterTaskItems("search term", []);

    expect(result).toEqual([]);
  });

  it("should return items that match search term", () => {
    const tasks: Task[] = [
      {
        id: 1,
        description: "study",
        ownerId: null,
        status: "TODO",
      },
    ];

    const result = filterTaskItems("study", tasks);

    expect(result).toStrictEqual([tasks[0]]);
  });
  it("should not return items that don't match search term", () => {
    const tasks: Task[] = [
      {
        id: 1,
        description: "study",
        ownerId: null,
        status: "TODO",
      },
    ];

    const result = filterTaskItems("cook", tasks);

    expect(result).not.toStrictEqual([tasks[0]]);
  });
});
