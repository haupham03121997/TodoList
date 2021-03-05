export const FETCH_TODO_REQUEST = "FETCH_TODO_REQUEST";
export const FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS";
export const FETCH_TODO_FAILED = "FETCH_TODO_FAILED";
export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "TODO_SUCCESS";
export const ADD_TODO_FAIL = "ADD_TODO_FAIL";
export const DELETED_TODO = "DELETED_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

interface Todo {
   loading : boolean;
   todo : ToDo[];
   error : string;
}
interface FetchToDoRequest extends Todo {
  type : typeof FETCH_TODO_REQUEST;
}

interface FetchToDoSuccess extends Todo {
  type : typeof FETCH_TODO_SUCCESS;
}

interface FetchToDoFail extends Todo {
  type : typeof FETCH_TODO_FAILED;
}

export type ToDoActionType = FetchToDoRequest | FetchToDoSuccess | FetchToDoFail;