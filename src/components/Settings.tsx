import React, { useContext } from "react";
import { useTasks } from "../contexts/TasksContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useUser } from "../contexts/UserContext";

const Settings: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, signInUser, logoutUser } = useUser();
  const { taskItems, loadComplete, removeManyTasks } = useTasks();

  const numOfTasks = taskItems.length;

  const toggleTheme = () => {
    if (setTheme) {
      setTheme(theme === "dark" ? "" : "dark");
    }
  };

  const handleClearTaskboard = () => {
    const taskIds = taskItems.map(({ id }) => id);

    removeManyTasks(taskIds);
  };

  return (
    <div className="settings" data-testid="settings-menu">
      {
        // check if app has loaded before display sign in / log out buttons
        loadComplete ? (
          user ? ( // check if there is a logged in user
            <button
              onClick={logoutUser}
              className="btn btn--green btn__taskBoard btn__taskBoard--auth"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={signInUser}
              className="btn btn--red btn__taskBoard btn__taskBoard--auth"
            >
              Sign In With Google
            </button>
          )
        ) : // if app has not loaded do not display sign in / log out buttons
        null
      }
      <button
        onClick={handleClearTaskboard}
        className="btn btn--black btn__taskBoard btn__taskBoard--clear"
        disabled={numOfTasks === 0}
      >
        Clear Task Board
      </button>

      <input
        className="themeToggle__checkbox srOnly"
        type="checkbox"
        name="themeToggle"
        id="themeToggle"
        onChange={toggleTheme}
        defaultChecked={theme === "dark"}
      />
      <label className="themeToggle__label" htmlFor="themeToggle">
        {theme === "dark" ? "Light" : "Dark"} Mode{" "}
        <span className="themeToggle__toggler"></span>
      </label>
    </div>
  );
};

export default Settings;
