import React, { FormEvent , useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodoAction } from './Action/todoAction';

export const AddToDo: React.FC = ()=>{
  const dispatch = useDispatch(); 
  const [value , setValue ] = useState<string>("")
  const handleOnChange= (e : React.ChangeEvent<HTMLInputElement>) =>{ 
    setValue(e.target.value)
  }
  const hanldleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(AddTodoAction({text : value , completed: false}));
    setValue("");
  }

  return(
    <div className="card__add">
    <input id="newTask" type="text" value={value} placeholder="Enter an activity..." onChange={handleOnChange}/>
    <button onClick={hanldleSubmit} id="addItem" className="card__add__btn">
      <i className="fa fa-plus" />
    </button>
  </div>
  )
}