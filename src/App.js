import { useEffect, useState } from "react";

import { TodoContext } from "./context/TodoContext";
import { AddTodo, Todos, Alert } from "./components";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [filtredTodos, setFiltredTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editTodo, setEditTodo] = useState({});
  const [editTodoIndex, setEditTodoIndex] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, action: "", message: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (todo && !edit) {
      showAlert(true, "success", "کار مورنظر به لیست اضافه گردید");
      createNewTodo();
    } else if (todo && edit) {
      const getTodos = [...todos];
      editTodo.text = todo;
      getTodos[editTodoIndex] = editTodo;
      setTodos(getTodos);
      showAlert(true, "warning", "گزینه موردنظر با موفقیت ویرایش شد");
      resetValues();
    } else {
      showAlert(true, "danger", "لطفا مقداری را وارد نمایید");
    }
  };

  const createNewTodo = () => {
    const getTodo = {
      id: Date.now(),
      text: todo,
      complete: false,
    };

    setTodos([...todos, getTodo]);
    setFiltredTodos([...todos, getTodo]);

    setTodo("");
  };

  const onUpdateTodo = (todoId) => {
    setEdit((prevEdit) => !prevEdit);
    setEditID(todoId);
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    const todo = todos[todoIndex];
    setTodo(todo.text);
    setEditTodo(todo);
    setEditTodoIndex(todoIndex);
  };

  const onDeleteTodo = (todoId) => {
    const getTodos = [...todos];
    const filtredTodos = getTodos.filter((todo) => todo.id !== todoId);
    setTodos(filtredTodos);
    setFiltredTodos(filtredTodos);
    showAlert(true, "danger", "گزینه موردنظر با موفقیت حذف شد");
  };

  const onSearchTodo = (query) => {
    if (!query) return setFiltredTodos([...todos]);

    let allTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(query.toLowerCase());
    });

    setFiltredTodos(allTodos);
  };

  const clearList = () => {
    setTodos([]);
    setFiltredTodos([]);
    resetValues();
    showAlert(true, "danger", "لیست با موفقیت پاک شد");
  };

  const resetValues = () => {
    setTodo("");
    setEditTodo({});
    setEditTodoIndex(null);
    setEdit(false);
    setEditID(null);
  };

  const showAlert = (show = false, action, message) => {
    setAlert({ show, action, message });
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        todos,
        filtredTodos,
        edit,
        editID,
        alert,
        showAlert,
        setTodo,
        setTodos,
        setFiltredTodos,
        setEdit,
        setEditID,
        onSubmitForm,
        onUpdateTodo,
        onDeleteTodo,
        onSearchTodo,
        clearList,
      }}
    >
      <section className="section-center">
        {alert.show && (
          <Alert action={alert.action} message={alert.message} />
        )}
        <h2 className="title">مدیریت کارهای روزانه</h2>
        <AddTodo />
        <Todos />
      </section>
    </TodoContext.Provider>
  );
};
export default App;
