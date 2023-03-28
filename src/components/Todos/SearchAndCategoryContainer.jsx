import { useContext } from "react";

import { SearchTodos, CategoryTodos } from "./";
import { TodoContext } from "../../context/TodoContext";

const SearchAndCategoryContainer = () => {
  const { todos } = useContext(TodoContext);

  return (
    <>
      {todos.length > 3 && (
        <div className="search-and-category-container">
          <SearchTodos />
          <CategoryTodos />
        </div>
      )}
    </>
  );
};

export default SearchAndCategoryContainer;
