import { combineReducers } from 'redux';
import { addTodoReducer } from './TodoReducer'
export  const rootReducer = combineReducers({
  addTodoReducer,
})