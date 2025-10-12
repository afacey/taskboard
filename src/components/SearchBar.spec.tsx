import React from "react";
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("renders", () => {
    render(<SearchBar />);
  });

  it("does not show clear search button when empty", () => {
    render(<SearchBar />);

    expect(
      screen.queryByLabelText(/Button to clear the search terms/),
    ).not.toBeInTheDocument();
  });

  it("remove search text when clear search button is clicked", () => {
    render(<SearchBar />);

    const input = screen.getByLabelText(/Search for task items/);

    fireEvent.change(input, { target: { value: "study" } });

    expect(screen.getByDisplayValue(/study/)).toBeInTheDocument();

    const clearSearchBtn = screen.getByLabelText(
      /Button to clear the search terms/,
    );

    fireEvent.click(clearSearchBtn);

    expect(screen.queryByDisplayValue(/study/)).not.toBeInTheDocument();
  });
});
