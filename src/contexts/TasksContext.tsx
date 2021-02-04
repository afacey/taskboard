import React, { useState, useContext, createContext, useEffect, useCallback } from 'react';
import { retrieveTaskItems } from '../firebase';
import { UserContext, UserContextData } from './UserContext';
import {Task, TaskStatus, TaskListFilter} from '../types/task';

interface TasksContextData {
  taskStatus: TaskStatus[];
  taskItems: Task[];
  numOfTasks: number;
  loadComplete: boolean;
  searchTerms: string;
  setSearchItems: (searchItems: Task[]) => void;
  setSearchTerms: (searchTerms: string) => void;
  setListFilter: (filter: TaskListFilter) => void;
}

export const TasksContext = createContext<Partial<TasksContextData>>({});

const TasksProvider: React.FC = ({children}) => {
  const [ loadComplete, setLoadComplete ] = useState<boolean>(false); 
  const [ taskItems, setTaskItems ] = useState<Task[]>([]);
  const { user, checkForUser } = useContext<Partial<UserContextData>>(UserContext);

  const [ listFilter, setListFilter ] = useState<TaskListFilter>("all");

  const [ searchTerms, setSearchTerms ] = useState("");
  const [ searchItems, setSearchItems ] = useState<Task[]>([]);

  const taskStatus: TaskStatus[] = ['open', 'inProgress', 'complete'];

  // --------------------------- retrieveTaskItems
  const fetchTasks = useCallback(() => {
    if (user && user.dbRef) {
      retrieveTaskItems(user.dbRef, setTaskItems)
    }
  }, [user])  

  // retreive tasks once userCheck is true
  useEffect(function fetchTasksAfterUserCheck() {
    if (!checkForUser) {
      fetchTasks();
      setLoadComplete(true);
    }

  }, [checkForUser, fetchTasks])


    // --------------------------- handleSearch
    const handleSearch = () => {
      if (searchTerms) {
        // create regex for search terms - case insensistive
        const searchString = new RegExp(searchTerms, 'i');
    
        // filter out tasks by test against search terms
        const searchItems = taskItems.filter(({task}) => searchString.test(task));
    
        // store filtered results into searchItems state to preserve the state of the taskItems
        setSearchItems(searchItems);
      }
    }
  // filter tasks from search terms
  useEffect(handleSearch, [searchTerms, taskItems])
  

  // if there are search terms, display the filtered searchItems, otherwise show all taskItems
  const items = !searchTerms.length ? taskItems : searchItems;

  // if a list has been filtered, only display items from that list
  const lists = listFilter === 'all' ? taskStatus : [listFilter];

  
  const value = {
    taskStatus: lists,
    taskItems: items,
    numOfTasks: items.length,
    loadComplete,
    searchTerms,
    setSearchItems,
    setSearchTerms,
    setListFilter,
  }


  return (
    <TasksContext.Provider value={value}>
      {children}
    </TasksContext.Provider>
  )
}

export default TasksProvider