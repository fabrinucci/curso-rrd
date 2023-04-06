import React from 'react';
import './TodoSearch.css';
import { useSearchParams } from 'react-router-dom';

function TodoSearch({ searchValue, setSearchValue, loading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get('search');

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
    setSearchParams({ search: event.target.value });
  };

  return (
    <input
      className='TodoSearch'
      placeholder='Cebolla'
      value={paramsValue ?? ''}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
