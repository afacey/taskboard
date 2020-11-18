import React, { useContext } from 'react';
import { TasksContext } from '../contexts/TasksContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { UserContext } from '../contexts/UserContext';
import { clearTaskboard } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';

const Menu = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const { user: { dbRef, loggedIn }, signInUser, logoutUser } = useContext(UserContext);
  const { numOfTasks, loadComplete } = useContext(TasksContext);

  const toggleTheme = () => { theme === "dark" ? setTheme("") : setTheme("dark") }

  const handleClearTaskboard = () => { clearTaskboard(dbRef); }

  return (
    <div className="menu">
      <button onClick={handleClearTaskboard}  className="btn btn--black btn__taskBoard btn__taskBoard--clear" disabled={ numOfTasks ? "" : "disabled" }>Clear Task Board</button>
      
      {
        // check if app has loaded before display sign in / log out buttons
        loadComplete 
          ? loggedIn // check if there is a logged in user
            ? <button  onClick={logoutUser} className="btn btn--green btn__taskBoard btn__taskBoard--auth">Log Out</button>
            : <button  onClick={signInUser} className="btn btn--red btn__taskBoard btn__taskBoard--auth">Sign In With Google</button>
          // if app has not loaded do not display sign in / log out buttons
          : null
      }
      
      <button className="btn btn--theme themeToggler" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faAdjust} />
        <span>{theme === "dark" ? "Light" : "Dark"} Mode</span>
      </button>

    </div>
  )
}

export default Menu;