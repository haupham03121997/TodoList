import React from 'react';
import { ListItemToDo } from './ListItemToDo';
export const ListToDo: React.FC = () => {
  return (
    <div className="card__todo">
      <ListItemToDo />
    </div>
  )
}