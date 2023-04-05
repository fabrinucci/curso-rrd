import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ onClick, loading }) {
  return (
    <button
      disabled={loading}
      className={`${loading && 'disabled'} CreateTodoButton`}
      onClick={onClick}
    >
      +
    </button>
  );
}

export { CreateTodoButton };
