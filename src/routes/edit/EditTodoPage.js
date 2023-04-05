import React from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useTodos } from 'routes/useTodos';
import { TodoForm } from 'ui/TodoForm';

function EditTodoPage() {
  const { state, stateUpdaters } = useTodos();
  const { loading, getTodo } = state;
  const { editTodo } = stateUpdaters;

  const params = useParams();
  const location = useLocation();

  const id = params.id;

  let todoText;

  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) return <p>Loading...</p>;
  else {
    const todo = getTodo(id);
    todoText = todo.text;
  }

  return (
    <TodoForm
      loading={loading}
      defaultTextTodo={todoText}
      label='Edita tu TODO'
      submitText='Guardar'
      submitEvent={(text) => editTodo(id, text)}
    />
  );
}

export { EditTodoPage };
