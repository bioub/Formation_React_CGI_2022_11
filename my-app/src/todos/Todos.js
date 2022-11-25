import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd, todoSetNewTodo } from '../store/actions';
import { todosSelector } from '../store/selectors';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

function Todos() {
  const { items, newTodo } = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleNewTodoChange = (value) => {
    dispatch(todoSetNewTodo(value));
  };


  const handleAdd = () => {
    dispatch(todoAdd(newTodo))
  };

  const handleDelete = (item) => {

  };

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onNewTodoChange={handleNewTodoChange} onAdd={handleAdd} />
      <TodosList items={items} onDelete={handleDelete} />
    </div>
  );
}

export default Todos;
