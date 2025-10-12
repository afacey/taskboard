import React from "react";

import { describe, it } from "vitest";
import App from "./App";
import { render } from "@testing-library/react";
describe("<App />", () => {
  it("should render", () => {
    render(<App />);
  });
});
