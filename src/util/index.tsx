import { Task } from "../types/task.type";

export const filterTaskItems = (searchText: string, taskItems: Task[]) => {
  // create regex for search terms - case insensistive
  const searchRegex = new RegExp(searchText, "i");

  // filter out tasks by test against search terms
  const searchItems = taskItems.filter(({ description: task }) =>
    searchRegex.test(task),
  );

  return searchItems;
};
