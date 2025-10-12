import React from "react";
import { describe, it } from "vitest";
import { fireEvent, render, screen } from "../util/TestUtils";
import Header from "./Header";

describe("<Header />", () => {
  it("should render", () => {
    render(<Header />);
  });

  it("displays heading and subheading", () => {
    render(<Header />);

    screen.getByRole("heading", { name: /Task Board/ });
    screen.getAllByText(/Add and track tasks to increase productivity!/);
  });

  it("should not display menu by default", () => {
    render(<Header />);
    expect(screen.getAllByText(/Settings/)[0]).toBeInTheDocument();

    expect(screen.queryByTestId("settings-menu")).not.toBeInTheDocument();
  });

  it("should open menu when settings text is clicked", () => {
    render(<Header />);

    const settings = screen.getAllByText(/Settings/)[0];

    fireEvent.click(settings);

    screen.getByTestId("settings-menu");
  });
});
