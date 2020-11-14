import React, { useReducer } from 'react';
import { addTask, removeTask, updateTask } from './firebase';

const ADD_TASK = "ADD_TASK";
const reducer = (state, action) => {
  if (action.type === ADD_TASK) {

  }
  return state;
}

const handleAddTask = (e) => { 
  e.preventDefault();
  const newTask = {
    task: taskValue,
    status: id
  }
  addTask(user.dbRef, newTask); 
}

const handleRemoveTask = () => { removeTask(user.dbRef, id); }

const handleUpdateTask = (e) => { 
  e.preventDefault();
  updateTask(user.dbRef, id, taskValue); 
}
