import React from "react";
import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { modifyTask } from "../stores/Tasks.store";

vi.mock(import("../stores/Tasks.store"), async (importOriginal) => {
  const original = await importOriginal();

  return {
    ...original,
    modifyTask: vi.fn(),
  };
});

describe("<TaskItem />", () => {
  it("renders", () => {
    render(<TaskItem id={1} status="TODO" task="task" />);
  });

  it("does not show the task edit form by default", () => {
    render(<TaskItem id={1} status="TODO" task="task" />);

    expect(screen.queryByTestId("task-form")).not.toBeInTheDocument();
  });

  it("should not show previous status button when status is TODO", () => {
    render(<TaskItem id={1} status="TODO" task="task" />);

    expect(
      screen.queryByLabelText(/Move task to the previous status/),
    ).not.toBeInTheDocument();
  });

  it("should not show next status button when status is COMPLETED", () => {
    render(<TaskItem id={1} status="COMPLETED" task="task" />);

    expect(
      screen.queryByLabelText(/Move task to the next status/),
    ).not.toBeInTheDocument();
  });

  it("changes to the correct status: TODO -> IN_PROGRESS", () => {
    render(<TaskItem id={1} status="TODO" task="task" />);

    const nextBtn = screen.getByLabelText(/Move task to the next status/);

    fireEvent.click(nextBtn);

    expect(modifyTask).toHaveBeenCalledWith({
      id: 1,
      status: "IN_PROGRESS",
    });
  });

  it("changes to the correct status: IN_PROGRESS -> TODO", () => {
    render(<TaskItem id={1} status="IN_PROGRESS" task="task" />);

    const prevBtn = screen.getByLabelText(/Move task to the previous status/);

    fireEvent.click(prevBtn);

    expect(modifyTask).toHaveBeenCalledWith({
      id: 1,
      status: "TODO",
    });
  });

  it("changes to the correct status: IN_PROGRESS -> COMPLETED", () => {
    render(<TaskItem id={1} status="IN_PROGRESS" task="task" />);

    const nextBtn = screen.getByLabelText(/Move task to the next status/);

    fireEvent.click(nextBtn);

    expect(modifyTask).toHaveBeenCalledWith({
      id: 1,
      status: "COMPLETED",
    });
  });

  it("changes to the correct status: COMPLETED => IN_PROGRESS", () => {
    render(<TaskItem id={1} status="COMPLETED" task="task" />);

    const prevBtn = screen.getByLabelText(/Move task to the previous status/);

    fireEvent.click(prevBtn);

    expect(modifyTask).toHaveBeenCalledWith({
      id: 1,
      status: "IN_PROGRESS",
    });
  });

  it("should display Task Edit Form when edit button is clicked", () => {
    render(<TaskItem id={1} status="TODO" task="task" />);

    const editBtn = screen.getByLabelText(/Edit task/);

    fireEvent.click(editBtn);

    expect(screen.getByTestId("task-form")).toBeInTheDocument();
  });
});
