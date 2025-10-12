import React from "react";

import App from "./App";

import UserContext from "./contexts/UserContext";
import ThemeContext from "./contexts/ThemeContext";
import TasksContext from "./contexts/TasksContext";
import { createRoot } from "react-dom/client";

const rootNode = document.getElementById("root")!;

const root = createRoot(rootNode);

root.render(
  <React.StrictMode>
    <UserContext>
      <ThemeContext>
        <TasksContext>
          <App />
        </TasksContext>
      </ThemeContext>
    </UserContext>
  </React.StrictMode>,
);
