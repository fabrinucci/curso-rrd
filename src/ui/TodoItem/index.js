import React from 'react';
import { CompleteIcon } from 'ui/TodoIcon/CompleteIcon';
import { DeleteIcon } from 'ui/TodoIcon/DeleteIcon';
import { EditIcon } from 'ui/TodoIcon/EditIcon';
import './TodoItem.css';

function TodoItem(props) {
  return (
    <li className='TodoItem'>
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
      <EditIcon onEdit={props.onEdit} />
    </li>
  );
}

export { TodoItem };
