import React from "react";

import { describe, it } from "vitest";
import App from "./App";
import { render } from "./util/TestUtils";
describe("<App />", () => {
  it("should render", () => {
    render(<App />);
  });
});
