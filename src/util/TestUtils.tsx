import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import ThemeContext from "../contexts/ThemeContext";
import UserContext from "../contexts/UserContext";
import TasksContext from "../contexts/TasksContext";

const AllTheProviders = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <UserContext>
      <ThemeContext>
        <TasksContext>{children}</TasksContext>
      </ThemeContext>
    </UserContext>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
