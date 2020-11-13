import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Settings from './Settings';

const Header = (props) => {
  const {clearTaskboard, numOfTasks, userLoggedIn, signInUser, logoutUser, loadComplete, theme, setTheme} = props;
  const [ displaySettings, setDisplaySettings ] = useState(false);

  const openSettings = () => { setDisplaySettings(true);}
  const closeSettings = () => { setDisplaySettings(false);}

  return (  
    <header>
      <div className="wrapper displayContainer">
        <div className="header__text">
          <h1>Task Board</h1>
          <p>Add and track tasks to increase productivity!</p>
        </div>
        <div className="header__buttons">
            <h2>
              <span>Settings </span>
            {
              displaySettings ? <FontAwesomeIcon icon={faTimes} onClick={closeSettings} /> : <FontAwesomeIcon icon={faChevronDown} onClick={openSettings} />
            }
            </h2>
          {
            displaySettings
            ? 
            <Settings 
            theme={theme} 
            setTheme={setTheme} 
            clearTaskboard={clearTaskboard} 
            numOfTasks={numOfTasks} 
            userLoggedIn={userLoggedIn} 
            signInUser={signInUser}
            logoutUser={logoutUser}
            loadComplete={loadComplete}
            closeSettings={closeSettings} 
            />
            : 
            <>
            </>
          }
          
        </div>
      </div>
    </header>
  )
}


export default Header;