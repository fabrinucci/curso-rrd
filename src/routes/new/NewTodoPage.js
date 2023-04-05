import React from 'react';
import { useTodos } from 'routes/useTodos';
import { TodoForm } from 'ui/TodoForm';

function NewTodoPage() {
  const { stateUpdaters } = useTodos();
  const { addTodo } = stateUpdaters;

  const onSubmit = (text) => {
    addTodo(text);
  };

  return (
    <div>
      <TodoForm
        label='Escribe tu nuevo TODO'
        submitText='Añadir'
        submitEvent={onSubmit}
      />
    </div>
  );
}

export { NewTodoPage };
