import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import Settings from './Settings';

const Header: React.FunctionComponent = (): JSX.Element => {
  const [ displaySettings, setDisplaySettings ] = React.useState<boolean>(false);

  return (  
    <header>
      <div className="wrapper displayContainer">
        <div className="header__text">
          <h1>Task Board</h1>
          <p>Add and track tasks to increase productivity!</p>
        </div>
        <div className="header__buttons">
            <h2 onClick={() => setDisplaySettings(prevValue => !prevValue)}>
              <span>Settings </span>
              <span className="header__menuToggleIcon"><FontAwesomeIcon icon={displaySettings ? faTimes : faChevronDown} /></span>
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