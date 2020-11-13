import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import ThemeContext from '../contexts/ThemeContext';

const TaskBoardMenu = props => {
  const { searchTerms, handleListFilter, handleSearchInput, clearSearch } = props;
  const theme = useContext(ThemeContext);

  return(
    <section className={`taskBoard__menu ${theme}`}>

      {/* Task List Filter Inputs */}
      <fieldset className="taskBoard__listFilter">
        <div className="inputContainer__filter">
          <legend className="srOnly">Filter the task items by list</legend>
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterAll" value="all" onChange={handleListFilter} defaultChecked />
          <label className="btn btn--black" htmlFor="filterAll">All</label>
          
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterOpen" value="open" onChange={handleListFilter} />
          <label className="btn btn--red" htmlFor="filterOpen">Open</label>
          
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterInProgress" value="inProgress" onChange={handleListFilter} />
          <label className="btn btn--blue" htmlFor="filterInProgress">In Progress</label>
          
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterComplete" value="complete" onChange={handleListFilter} />
          <label className="btn btn--green" htmlFor="filterComplete">Complete</label>
        </div>
      </fieldset>

      {/* Task List Search Bar */}
      <div className="inputContainer__searchBar">
        <label htmlFor="searchTerms" className="srOnly">Search for task items</label>
        <input className="taskBoard__searchBar" type="text" name="searchTerms" id="searchTerms" placeholder="search" onChange={handleSearchInput} value={searchTerms} />
        {
          // Check if the user has started a search
          searchTerms ?
          // Display button to clear the search terms
          <>
            <label htmlFor="searchBarBtn" className="srOnly">Button to clear the search terms</label>
            <button id="searchBarBtn" className="taskBoard__searchBarBtn" onClick={clearSearch}>
              <FontAwesomeIcon className="taskBoard__searchBarIcon--clear" icon={faTimes} aria-hidden="true"/>
            </button>
          </>
          :
          // Display search icon to visually indicate that tasks can be searched for
          <FontAwesomeIcon className="taskBoard__searchBarIcon" icon={faSearch} aria-hidden="true"/>
        }
      </div>

    </section>
  )
}

export default TaskBoardMenu;