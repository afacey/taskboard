import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskBoardMenu from "./components/TaskBoardMenu";
import TaskLists from "./components/TaskLists";
import { useTheme } from "./stores/Theme.store";
import { AuthService } from "./services/auth.service";
import { setUser, setUserInitialized, useUser } from "./stores/User.store";
import { getAllTasks } from "./services/task.service";
import { setTaskItems, setTaskLoaded } from "./stores/Tasks.store";

const App = () => {
  const theme = useTheme();
  const user = useUser((state) => state.user);
  const userInitialized = useUser((state) => state.userInitialized);

  // ------- check if there's a logged in user before retrieving any tasks
  useEffect(function checkForAuthenticatedUser() {
    // check if there is a current user
    AuthService.onAuthStateChanged((user) => {
      // if there is a user update user store state
      if (user) {
        setUser({ id: user.uid });
      }

      setUserInitialized(true);
    });
  }, []);

  // retreive tasks once userCheck is true
  useEffect(
    function fetchTasksAfterUserCheck() {
      if (userInitialized) {
        getAllTasks(user?.id)
          .then((result) => {
            if (result.status === "Success") {
              setTaskItems(result.data);
            }
          })
          .finally(setTaskLoaded);
      }
    },
    [userInitialized, user],
  );

  return (
    <div className={`pageContainer ${theme}`}>
      {/* START of HEADER */}
      <Header />

      {/* START of MAIN */}
      <main>
        <div className="wrapper">
          <TaskBoardMenu />
          <TaskLists />
        </div>
      </main>

      {/* START of FOOTER */}
      <Footer />
    </div>
  );
};

export default App;
