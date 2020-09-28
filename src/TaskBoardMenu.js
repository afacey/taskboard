import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TaskBoardMenu = props => {
  const { clearTaskboard, numOfTasks, handleChange, searchTerms } = props;

  return(
    <div className="taskBoard__menu">


      <div className="inputContainer__filter">
        {/* <h4>Lists: </h4> */}
        <input type="radio" className="sr-only" name="listFilter" id="filterAll" value="all" onChange={handleChange} defaultChecked />
        <label htmlFor="filterAll">All</label>
        <input type="radio" className="sr-only" name="listFilter" id="filterOpen" value="open" onChange={handleChange} />
        <label htmlFor="filterOpen">Open</label>
        <input type="radio" className="sr-only" name="listFilter" id="filterInProgress" value="inProgress" onChange={handleChange} />
        <label htmlFor="filterInProgress">In Progress</label>
        <input type="radio" className="sr-only" name="listFilter" id="filterComplete" value="complete" onChange={handleChange} />
        <label htmlFor="filterComplete">Complete</label>
      </div>

      <div className="inputContainer__searchBar">
        <input className="taskBoard__searchBar" type="text" name="searchTerms" id="seachTerms" placeholder="search" onChange={handleChange} value={searchTerms} />
        {/* TODO style to pad the text to the right to prevent the icon overlapping */}
        <FontAwesomeIcon className="taskBoard__searchBarIcon" icon={faSearch} aria-hidden="true"/>
      </div>


      

      <div className="inputContainer__buttons">
        <button 
          onClick={clearTaskboard} 
          className="btn__taskList btn__taskList--clear" 
          disabled={ numOfTasks ? "" : "disabled" }
        >
          Clear Board
        </button>
      </div>

    </div>
  )
}

export default TaskBoardMenu;