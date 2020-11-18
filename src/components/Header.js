import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Menu from './Menu';

const Header = () => {
  const [ displayMenu, setDisplayMenu ] = useState(false);

  const toggleMenu = () => { setDisplayMenu(!displayMenu)}

  return (  
    <header>
      <div className="wrapper displayContainer">
        <div className="header__text">
          <h1>Task Board</h1>
          <p>Add and track tasks to increase productivity!</p>
        </div>
        <div className="header__buttons">
          
          <button className="btn btn--toggleMenu" onClick={toggleMenu} >
            <span>Menu </span>
            <FontAwesomeIcon icon={faChevronDown} />
          </button>

          {
            displayMenu
            &&
            <Menu />
          }
          
        </div>
      </div>
    </header>
  )
}


export default Header;