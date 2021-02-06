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
  setSearchTerms: (searchTerms: string) => void;
  setListFilter: (filter: TaskListFilter) => void;
}

export const TasksContext = createContext<Partial<TasksContextData>>({});

const TasksProvider: React.FC = ({children}) => {
  const [ loadComplete, setLoadComplete ] = useState<boolean>(false); 
  const [ taskItems, setTaskItems ] = useState<Task[]>([]);
  const { user, checkForUser } = useContext<Partial<UserContextData>>(UserContext);

  const [ listFilter, setListFilter ] = useState<TaskListFilter>("all");

  const [ searchTerms, setSearchTerms ] = useState<string>("");

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

  // if a list has been filtered, only display items from that list
  const lists = listFilter === 'all' ? taskStatus : [listFilter];

  
  const value = {
    taskStatus: lists,
    taskItems,
    numOfTasks: taskItems.length,
    loadComplete,
    searchTerms,
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