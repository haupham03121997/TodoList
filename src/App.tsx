import React from 'react';
import {AddToDo} from './AddToDo'
import { ListToDo } from './ListTodo';
import './scss/style.scss';
function App() {
  return (
    <div className="app">
      <div className="card">
        <div className="card__header">
          <img src="./image/X2oObC4.png" alt="img" />
        </div>
        {/* <h2>hello!</h2> */}
        <div className="card__body">
          <div className="filter-btn">
            <span className="toggle-btn">
            <i className="fa fa-filter"></i>
              {/* <i className="fa fa-times" /> */}
            </span>
          </div>
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>February 12,2020</p>
            </div>
            <AddToDo />
            <ListToDo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
