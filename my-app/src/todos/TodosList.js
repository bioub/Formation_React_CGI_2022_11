import TodoItem from "./TodoItem";

function TodosList({ items = [], onDelete }) {
  return (
    <div className="TodosList">
      {items.map((item) => <TodoItem key={item.id} item={item} onDelete={onDelete} />)}
    </div>
  );
}

export default TodosList;
