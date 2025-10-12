import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { setTaskSearchTerms, useTasks } from "../stores/Tasks.store";

export default function SearchBar() {
  const { searchTerms } = useTasks();

  const handleSearchInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setTaskSearchTerms(evt.target.value);
  };

  const clearSearch = () => {
    setTaskSearchTerms("");
  };

  return (
    <div className="inputContainer__searchBar">
      <label htmlFor="searchTerms" className="srOnly">
        Search for task items
      </label>
      <input
        className="taskBoard__searchBar"
        type="search"
        name="searchTerms"
        id="searchTerms"
        placeholder="search"
        onChange={handleSearchInput}
        value={searchTerms}
      />
      {
        // Check if the user has started a search
        searchTerms ? (
          // Display button to clear the search terms
          <>
            <label htmlFor="searchBarBtn" className="srOnly">
              Button to clear the search terms
            </label>
            <button
              id="searchBarBtn"
              className="taskBoard__searchBarBtn"
              onClick={clearSearch}
            >
              <FontAwesomeIcon
                className="taskBoard__searchBarIcon--clear"
                icon={faTimes}
                aria-hidden="true"
              />
            </button>
          </>
        ) : (
          // Display search icon to visually indicate that tasks can be searched for
          <FontAwesomeIcon
            className="taskBoard__searchBarIcon"
            icon={faSearch}
            aria-hidden="true"
          />
        )
      }
    </div>
  );
}
