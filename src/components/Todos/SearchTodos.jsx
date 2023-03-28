import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

const SearchTodos = () => {
  const { onSearchTodo } = useContext(TodoContext);
  return (
    <div className="todo-search">
      <span className="search-btn">
        <i className="fas fa-search" />
      </span>
      <input
        type="search"
        className="search-input"
        placeholder="جستجوی کار موردنظر ...."
        onChange={(e) => onSearchTodo(e.target.value)}
      />
    </div>
  );
};

export default SearchTodos;
