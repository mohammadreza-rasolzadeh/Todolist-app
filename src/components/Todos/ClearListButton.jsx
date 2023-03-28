import { useContext } from "react";

import { TodoContext } from "../../context/TodoContext";

const ClearListButton = () => {
  const { filtredTodos, clearList } = useContext(TodoContext);
  return (
    <>
      {filtredTodos.length > 0 && (
        <button className="clear-btn" onClick={clearList}>
          پاک کردن لیست
        </button>
      )}
    </>
  );
};

export default ClearListButton;
