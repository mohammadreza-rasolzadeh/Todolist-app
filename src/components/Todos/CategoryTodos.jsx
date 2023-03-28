import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

const CategoryTodos = () => {
  const { onFiltredTodos } = useContext(TodoContext);
  return (
    <select
      name="category"
      className="category"
      onChange={(event) => onFiltredTodos(event.target.value)}
    >
      <option value="all">همه کارها</option>
      <option value="completed">انجام شده</option>
      <option value="notCompleted">انجام نشده</option>
    </select>
  );
};

export default CategoryTodos;
