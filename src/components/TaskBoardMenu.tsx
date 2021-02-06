import React, { useContext } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import { TasksContext } from '../contexts/TasksContext';
import {TaskListFilter} from "../types/task"
import SearchBar from './SearchBar';

const TaskBoardMenu: React.FC = () => {
  const { setListFilter } = useContext(TasksContext);
  // const { setListFilter, searchTerms, setSearchTerms, setSearchItems, numOfTasks } = useContext(TasksContext);

  const changeListFilter = (filter: TaskListFilter) => {
      if (setListFilter) {
        setListFilter(filter)
      }

  }
  // --------------------------- handleChange
  // const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
  //   // call handleSearch if the input searchTerms input was changed and there are tasks
  //   if (setSearchTerms && numOfTasks) {
  //     // set seachTerms state to value, and then call this.handleSearch
  //     setSearchTerms(evt.target.value);
  //   }
  // }

  // const clearSearch = () => {
  //   if (setSearchItems && setSearchTerms) {
  //     setSearchTerms("");
  //     setSearchItems([]);
  //   }
  // }

  return(
    <section className="taskBoard__menu">

      {/* Task List Filter Inputs */}
      <fieldset className="taskBoard__listFilter">
        <div className="inputContainer__filter">
          <legend className="srOnly">Filter the task items by list</legend>
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterAll" value="all" onChange={() => changeListFilter("all")} defaultChecked />
          <label className="btn btn--black" htmlFor="filterAll">All</label>
          
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterOpen" value="open" onChange={() => changeListFilter("open")} />
          <label className="btn btn--red" htmlFor="filterOpen">Open</label>
          
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterInProgress" value="inProgress" onChange={() => changeListFilter("inProgress")} />
          <label className="btn btn--blue" htmlFor="filterInProgress">In Progress</label>
          
          <input type="radio" className="srOnly taskBoard__filterInput" name="listFilter" id="filterComplete" value="complete" onChange={() => changeListFilter("complete")} />
          <label className="btn btn--green" htmlFor="filterComplete">Complete</label>
        </div>
      </fieldset>

      <SearchBar />

    </section>
  )
}

export default TaskBoardMenu;