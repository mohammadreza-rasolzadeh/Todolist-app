import { useContext } from "react";

import Todo from "./Todo";
import emptyImg from "../../assets/13525-empty.gif";
import { TodoContext } from "../../context/TodoContext";

const Todos = () => {
  const {
    filtredTodos,
    todos,
    onUpdateTodo,
    onDeleteTodo,
    onCompletedTodo,
    onSearchTodo,
    onFiltredTodos,
    clearList,
  } = useContext(TodoContext);
  return (
    <section className="todos-container">
      {todos.length > 3 ? (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "2rem",          
          }}
        >
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
          <select
            name="category"
            className="category"
            onChange={(event) => onFiltredTodos(event.target.value)}
          >
            <option value="all">همه کارها</option>
            <option value="completed">انجام شده</option>
            <option value="notCompleted">انجام نشده</option>
          </select>
        </div>
      ) : null}
      <ul className="todo-list">
        {filtredTodos.length === 0 ? (
          <img src={emptyImg} alt="empty-img" className="empoty-img" />
        ) : (
          filtredTodos.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              updated={() => onUpdateTodo(todo.id)}
              deleted={() => onDeleteTodo(todo.id)}
              onCompleted={() => onCompletedTodo(todo.id)}
            />
          ))
        )}
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
