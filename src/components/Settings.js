import React from 'react';

const Settings = props => {
  const {clearTaskboard, numOfTasks, userLoggedIn, signInUser, logoutUser, loadComplete, theme, setTheme} = props;

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("")
    } else {
      setTheme("dark")
    }
  }

  return (
    <div className="settings">
      {/* <h2>Settings</h2> */}
      <button onClick={clearTaskboard}  className="btn btn--black btn__taskBoard btn__taskBoard--clear" disabled={ numOfTasks ? "" : "disabled" }>Clear Task Board</button>
          {
            // check if app has loaded before display sign in / log out buttons
            loadComplete 
            ? userLoggedIn // check if there is a logged in user
                ? <button  onClick={logoutUser} className="btn btn--green btn__taskBoard btn__taskBoard--auth">Log Out</button>
                : <button  onClick={signInUser} className="btn btn--red btn__taskBoard btn__taskBoard--auth">Sign In With Google</button>
            // if app has not loaded do not display sign in / log out buttons
            : null
          }
          <input className="themeToggle__checkbox sr-only" type="checkbox" name="themeToggle" id="themeToggle" onChange={toggleTheme} defaultChecked={theme === "dark"}/>
          <label className="themeToggle__label" htmlFor="themeToggle">{theme === "dark" ? "Light" : "Dark"} Mode <span className="themeToggle__toggler"></span></label>
    </div>
  )
}

export default Settings;