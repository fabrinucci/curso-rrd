import React from 'react';
import './TodoForm.css';
import { useNavigate } from 'react-router-dom';

function TodoForm(props) {
  const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTextTodo);
  const navigate = useNavigate();

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/');
  };
  const onSubmit = (event) => {
    event.preventDefault();
    props.submitEvent(newTodoValue);
    navigate('/');
  };

  return (
    <form onSubmit={onSubmit}>
      <label>{props.label}</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        disabled={props.loading}
        placeholder='Cortar la cebolla oara el almuerzo'
        className={props.loading && 'disabled'}
      />
      <div className='TodoForm-buttonContainer'>
        <button
          type='button'
          className='TodoForm-button TodoForm-button--cancel'
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button
          disabled={props.loading}
          type='submit'
          className={`${
            props.loading && 'disabled'
          } TodoForm-button TodoForm-button--add`}
        >
          {props.submitText}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
