import TodoItem from "./TodoItem";

function TodosList({ items = [] }) {
  return (
    <div className="TodosList">
      {items.map((item) => <TodoItem key={item.id} item={item} />)}
    </div>
  );
}

export default TodosList;
