import { useState } from 'react';
import TodoForm from './TodoForm';
import TodosList from './TodosList';

function Todos() {
  const [todos, setTodos] = useState([
    { id: Math.random(), title: 'ABC', completed: false },
    { id: Math.random(), title: 'DEF', completed: true },
  ]);
  const [newTodo, setNewTodo] = useState('XYZ');

  const handleAdd = () => {
    // ajout dans le tableau muable (mutable en anglais)
    // ne marche pas avec les hooks (aurait fonctionné avec setState)
    // todos.push({ id: Math.random(), title: newTodo, completed: false });
    // setTodos(todos);

    // ajout dans le tableau immuable (immutable en anglais)
    setTodos([ ...todos, { id: Math.random(), title: newTodo, completed: false } ]); // ES2015 SPREAD Operator (... indique qu'on veut le contenu du tableau)
  };

  return (
    <div className="Todos">
      <TodoForm newTodo={newTodo} onNewTodoChange={setNewTodo} onAdd={handleAdd} />
      <TodosList items={todos} />
    </div>
  );
}

export default Todos;
