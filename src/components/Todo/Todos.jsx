import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";
import Todo from "./Todo";

const Todos = () => {
  const {
    filtredTodos,
    todos,
    onUpdateTodo,
    onDeleteTodo,
    onSearchTodo,
    clearList,
  } = useContext(TodoContext);
  return (
    <section className="todos-container">
      {todos.length > 3 ? (
        <div className="todo-search">
          <input
            type="text"
            className="search-input"
            placeholder="جستجوی کار ...."
            onChange={(e) => onSearchTodo(e.target.value)}
          />
          <span className="search-btn">
            <i className="fas fa-search" />
          </span>
        </div>
      ) : null}
      <ul className="todo-list">
        {filtredTodos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            updated={() => onUpdateTodo(todo.id)}
            deleted={() => onDeleteTodo(todo.id)}
          />
        ))}
      </ul>
      {filtredTodos.length > 0 ? (
        <button className="clear-btn" onClick={clearList}>
          پاک کردن لیست
        </button>
      ) : null}
    </section>
  );
};
export default Todos;
