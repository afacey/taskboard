import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskBoardMenu from "./components/TaskBoardMenu";
import TaskLists from "./components/TaskLists";
import { handleOnAuthStateChanged } from "./services/auth.service";
import { getAllTasks } from "./services/task.service";
import { setTaskItems, setTaskLoaded } from "./stores/Tasks.store";
import { useTheme } from "./stores/Theme.store";
import { setUser } from "./stores/User.store";
import { showErrorAlert } from "./util/ErrorUtils";

const App = () => {
  const theme = useTheme();

  useEffect(function loadUserTasks() {
    const controller = new AbortController();

    handleOnAuthStateChanged(async (user) => {
      try {
        if (user) {
          setUser({ id: user.uid });
        }

        const result = await getAllTasks(controller.signal);

        if (result.status === "Success") {
          setTaskItems(result.data);
        }

        setTaskLoaded();
      } catch (error) {
        showErrorAlert("Error loading tasks: " + error);
      }
    });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={`pageContainer ${theme}`}>
      <Header />

      <main>
        <div className="wrapper">
          <TaskBoardMenu />
          <TaskLists />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
