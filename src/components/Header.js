import React from 'react';

const Header = (props) => {
  const {clearTaskboard, numOfTasks, userLoggedIn, signInUser, logoutUser, loadComplete, theme, setTheme} = props;

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("")
    } else {
      setTheme("dark")
    }
  }

  return (  
    <header>
      <div className="wrapper displayContainer">
        <div className="header__text">
          <h1>Task Board</h1>
          <p>Add and track tasks to increase productivity!</p>
        </div>
        <div className="header__buttons">
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
          <label className="themeToggle__label" htmlFor="themeToggle">Dark Mode <span class="themeToggle__toggler"></span></label>
        </div>
      </div>
    </header>
  )
}


export default Header;