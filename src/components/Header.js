import React from 'react';

const Header = ({clearTaskboard, numOfTasks}) => (
  <header>
    <div className="wrapper displayContainer">
      <div className="header__text">
        <h1>Task Board</h1>
        <p>Add and track tasks to increase productivity!</p>
      </div>
      <button onClick={clearTaskboard}  className="btn btn--black btn__taskBoard btn__taskBoard--clear" disabled={ numOfTasks ? "" : "disabled" }>Clear Task Board</button>
    </div>
  </header>
)

export default Header;