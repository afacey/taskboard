// import * as db from '../firebase';

const initialState = []


const TasksReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, ...action.payload];

    case 'UPDATE_TASK':
      return state.map(item => {
        if (item.key !== action.payload.key) {
          return item;
        }
        return { ...item, ...action.payload}
      });

    case 'REMOVE_TASK':
      return state.filter(item => item.key !== action.payload.key)

    case 'FETCH_TASKS':
      console.log('fetch called')
      return [...action.payload]
    
    case 'CLEAR_TASKS':
      return []

    default:
      return state;
  }
}

export default TasksReducer;