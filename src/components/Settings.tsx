import React from "react";

import { clearTaskboard, useTasks } from "../stores/Tasks.store";
import { toggleTheme, useTheme } from "../stores/Theme.store";
import { logoutUser, signInUser, useUser } from "../stores/User.store";

const Settings: React.FC = () => {
  const theme = useTheme();
  const user = useUser((state) => state.user);

  const { loadComplete, numOfTasks } = useTasks();

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
        onClick={clearTaskboard}
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
        <span className="themeToggle__toggler" />
      </label>
    </div>
  );
};

export default Settings;
