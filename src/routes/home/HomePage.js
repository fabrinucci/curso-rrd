import React from 'react';

import { useTodos } from '../useTodos';
import { ChangeAlert } from 'ui/ChangeAlert';
import { CreateTodoButton } from 'ui/CreateTodoButton';
import { EmptyTodos } from 'ui/EmptyTodos';
import { TodoCounter } from 'ui/TodoCounter';
import { TodoHeader } from 'ui/TodoHeader';
import { TodoItem } from 'ui/TodoItem';
import { TodoList } from 'ui/TodoList';
import { TodoSearch } from 'ui/TodoSearch';
import { TodosError } from 'ui/TodosError';
import { TodosLoading } from 'ui/TodosLoading';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const { state, stateUpdaters } = useTodos();

  const navigate = useNavigate();

  const {
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
  } = state;

  const { completeTodo, deleteTodo, setSearchValue, sincronizeTodos } =
    stateUpdaters;

  return (
    <React.Fragment>
      <TodoHeader loading={loading}>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        totalTodos={totalTodos}
        searchedTodos={searchedTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p>No hay resultados para {searchText}</p>
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.id)}
            onDelete={() => deleteTodo(todo.id)}
            onEdit={() =>
              navigate(`/edit/${todo.id}`, {
                state: { todo },
              })
            }
          />
        )}
      </TodoList>

      <CreateTodoButton loading={loading} onClick={() => navigate('/new')} />

      <ChangeAlert sincronize={sincronizeTodos} />
    </React.Fragment>
  );
}

export { HomePage };
