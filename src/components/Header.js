import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Settings from './Settings';

const Header = () => {
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
            <h2 onClick={displaySettings ? closeSettings : openSettings}>
              <span>Settings </span>
              <FontAwesomeIcon icon={faChevronDown} />
            </h2>
          {
            displaySettings
            &&
            <Settings />
          }
          
        </div>
      </div>
    </header>
  )
}


export default Header;