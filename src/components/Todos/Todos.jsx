import { useContext } from "react";

import { Todo } from ".";
import emptyImg from "../../assets/13525-empty.gif";
import { TodoContext } from "../../context/TodoContext";

const Todos = () => {
  const { filtredTodos, onUpdateTodo, onDeleteTodo, onCompletedTodo } =
    useContext(TodoContext);

  return (
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
  );
};

export default Todos;
