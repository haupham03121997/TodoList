import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DeleteTodoAction, FetchToDoAction, CompleteTodoAction } from './Action/todoAction'

export const ListItemToDo: React.FC = () => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state: any) => state.addTodoReducer);
  const [isClick, setIsClick] = React.useState<boolean>(false)
  const handleClick = (param: string) => {
    dispatch(DeleteTodoAction(param));
    setIsClick(!isClick)
  }
  const handleComplete = (iscompleted: string) => {
    dispatch(CompleteTodoAction(iscompleted));
    setIsClick(!isClick);
  }
  React.useEffect(() => {
    dispatch(FetchToDoAction)
  }, [isClick, dispatch])
  return (
    <>
      <ul className="todo" id="todo">
        {todo.length ? todo.map((todo: ToDo) => {
          return (
            <li className={todo.completed ? "iscompleted" : ""}>
              {todo.text}
              <span>
                <i className="fa fa-trash-alt" onClick={() => handleClick(todo.text)}></i>
                <i className="fa fa-check-circle" onClick={() => handleComplete(todo.text)}></i>
              </span>
            </li>
          )
        }) : <span >You have nothing to-do!</span>}
      </ul>
      <ul className="todo" id="completed">
        {todo.length ? todo.map((todo: ToDo) => {
          return (
            <li className={todo.completed ? "" : "iscompleted"}>
              {todo.text}
              <span>
                <i className="fa fa-trash-alt" onClick={() => handleClick(todo.text)}></i>
                <i className="fa fa-check-circle" onClick={() => handleComplete(todo.text)}></i>
              </span>
            </li>
          )
        }) :
          <span>
            You have yet to complete any tasks.
      </span>}
      </ul></>
  )
}