import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const TaskBoardMenu = props => {
  const { clearTaskboard, numOfTasks, handleChange, searchTerms } = props;

  return(
    <div className="taskBoard__menu">


      <div className="inputContainer__filter">
        {/* <h4>Lists: </h4> */}
        <input type="radio" className="srOnly" name="listFilter" id="filterAll" value="all" onChange={handleChange} defaultChecked />
        <label className="btn btn--orange" htmlFor="filterAll">All</label>
        
        <input type="radio" className="srOnly" name="listFilter" id="filterOpen" value="open" onChange={handleChange} />
        <label className="btn btn--red" htmlFor="filterOpen">Open</label>
        
        <input type="radio" className="srOnly" name="listFilter" id="filterInProgress" value="inProgress" onChange={handleChange} />
        <label className="btn btn--blue" htmlFor="filterInProgress">In Progress</label>
        
        <input type="radio" className="srOnly" name="listFilter" id="filterComplete" value="complete" onChange={handleChange} />
        <label className="btn btn--green" htmlFor="filterComplete">Complete</label>
      </div>

      <div className="inputContainer__searchBar">
        <input className="taskBoard__searchBar" type="text" name="searchTerms" id="seachTerms" placeholder="search" onChange={handleChange} value={searchTerms} />
        {/* TODO style to pad the text to the right to prevent the icon overlapping */}
        <FontAwesomeIcon className="taskBoard__searchBarIcon" icon={faSearch} aria-hidden="true"/>
      </div>


      

      {/* <div className="inputContainer__buttons">
        <button 
          onClick={clearTaskboard} 
          className="btn btn--black btn__taskBoard btn__taskBoard--clear" 
          disabled={ numOfTasks ? "" : "disabled" }
        >
          Delete All Tasks
        </button>
      </div> */}

    </div>
  )
}

export default TaskBoardMenu;