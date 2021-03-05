import {
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETED_TODO,
  FETCH_TODO_SUCCESS,
  COMPLETED_TODO,
} from "../Action/types";

interface initialValue {
  loading: boolean;
  error: boolean;
  todo: ToDo[];
}

const todoList = localStorage.getItem("todoList");
const initialState: initialValue = {
  loading: false,
  todo: todoList ? JSON.parse(todoList) : [],
  error: false,
};
export const fetchTodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_TODO_SUCCESS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export const addTodoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_TODO_SUCCESS: {
      const newTodo = [...state.todo, action.payload];
      localStorage.setItem("todoList", JSON.stringify(newTodo));

      return {
        ...state,
        loading: false,
        todo: newTodo,
        error: false,
      };
    }
    case DELETED_TODO: {
      const newTodo = [...state.todo];
      let index = newTodo.findIndex((todo) => {
        return todo.text === action.payload;
      });
      newTodo.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(newTodo));
      return {
        ...state,
        todo: newTodo,
      };
    }
    case COMPLETED_TODO:
      const newTodo = state.todo.map((todo) => {
        if (todo.text === action.payload) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todoList", JSON.stringify(newTodo));

      return {
        ...state,
        todo: newTodo,
      };
    default:
      return state;
  }
};
