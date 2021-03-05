import { Dispatch } from "redux";
// import { ToDoActionType } from "./types";
import {
  FETCH_TODO_REQUEST,
  // FETCH_TODO_SUCCESS,
  // FETCH_TODO_FAILED,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,
  DELETED_TODO,
  COMPLETED_TODO
} from "./types";

// const requetsTodo = (): ToDoActionType => ({
//   type: FETCH_TODO_REQUEST,
//   loading: true,
//   todo: [],
//   error: "",
// });
// const receiveTodo = (todos: ToDo[]): ToDoActionType => ({
//   type: FETCH_TODO_SUCCESS,
//   loading: true,
//   todo: todos,
//   error: "",
// });

// const invalidTodo = (): ToDoActionType => ({
//   type: FETCH_TODO_FAILED,
//   loading: true,
//   todo: [],
//   error: "",
// });

export const FetchToDoAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: FETCH_TODO_REQUEST,
    });
  };
};
export const AddTodoAction = (payload: ToDo) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_TODO_REQUEST,
    });
    dispatch({
      type: ADD_TODO_SUCCESS,
      payload,
    });

    dispatch({
      type: ADD_TODO_FAIL,
    });
  };
};
export const DeleteTodoAction = (param: string) => {
  return (dipatch: Dispatch) => {
    dipatch({
      type: DELETED_TODO,
      payload: param,
    });
  };
};

export const CompleteTodoAction = (iscompleted : string) =>{
  console.log("iscompleted" , iscompleted);
  
  return (dispatch : Dispatch)=>{
    dispatch({
      type : COMPLETED_TODO,
      payload : iscompleted
    })
  }
}
