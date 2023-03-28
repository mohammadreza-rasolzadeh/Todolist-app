import { useContext, useEffect, useRef } from "react";

import { TodoContext } from "../../context/TodoContext";

const AddTodo = () => {
  const inputFocus = useRef(null);
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const { todo, setTodo, onSubmitForm, edit } = useContext(TodoContext);
  return (
    <section className="add-todo">
      <form onSubmit={onSubmitForm} className="todo-form">
        <div className="input-group">
          <input
            ref={inputFocus}
            type="text"
            className="todo-input"
            placeholder="کـــارهای روزمره ...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          {edit ? (
            <button type="submit" className="btn edit-todo">
              ویرایش کردن
            </button>
          ) : (
            <button type="submit" className="btn add-btn">
              اضافه کردن
            </button>
          )}
        </div>
      </form>
    </section>
  );
};
export default AddTodo;
