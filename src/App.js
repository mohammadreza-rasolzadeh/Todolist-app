import _ from "lodash";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

import { AddTodo, Todos } from "./components";
import { TodoContext } from "./context/TodoContext";

const getTodoFromLocalStorage = () => {
  let todos = localStorage.getItem("todos");

  if (todos) {
    todos = JSON.parse(localStorage.getItem("todos"));
  } else {
    todos = [];
  }

  return todos;
};

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(getTodoFromLocalStorage());
  const [filtredTodos, setFiltredTodos] = useState(getTodoFromLocalStorage());
  const [editTodo, setEditTodo] = useState({});
  const [editTodoIndex, setEditTodoIndex] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, action: "", message: "" });

  const onSubmitForm = (e) => {
    e.preventDefault();

    if (todo && !edit) {
      toast.success("کار موردنظر به لیست اضافه گردید");
      createNewTodo();
    } else if (todo && edit) {
      const getTodos = [...todos];
      editTodo.text = todo;
      getTodos[editTodoIndex] = editTodo;
      setTodos(getTodos);
      setFiltredTodos(getTodos);
      toast.warning("گزینه موردنظر ویرایش شد");
      resetValues();
    } else {
      toast.error("لطفا مقداری را وارد نمایید");
    }
  };

  const createNewTodo = () => {
    const getTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
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
    toast.success("گزینه موردنظر حذف شد");
  };

  const onCompletedTodo = (todoId) => {
    const getTodos = [...todos];
    const todoIndex = getTodos.findIndex((todo) => todo.id === todoId);
    const todo = getTodos[todoIndex];
    todo.completed = !todo.completed;
    getTodos[todoIndex] = todo;
    setTodos(getTodos);
    setFiltredTodos(getTodos);
    if (todo.completed) {
      toast.success(" به حالت انجام شده قرار گرفت");
    } else {
      toast.success(" از حالت انجام شده خارج شد");
    }
  };

  const onSearchTodo = _.debounce((query) => {
    if (!query) return setFiltredTodos([...todos]);

    let allTodos = todos.filter((todo) => {
      return todo.text.toLowerCase().includes(query.toLowerCase());
    });

    setFiltredTodos(allTodos);
  }, 400);

  const onFiltredTodos = (value) => {
    const getTodos = [...todos];

    let result;

    if (value === "all") {
      result = getTodos;
    } else if (value === "completed") {
      result = getTodos.filter((todo) => todo.completed);
    } else if (value === "notCompleted") {
      result = getTodos.filter((todo) => !todo.completed);
    }

    setFiltredTodos(result);
  };

  const clearList = () => {
    setTodos([]);
    setFiltredTodos([]);
    resetValues();
    toast.success("لیست پاک شد");
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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
        onCompletedTodo,
        onSearchTodo,
        onFiltredTodos,
        clearList,
      }}
    >
      <section className="section-center">
        <h2 className="title">مدیریت کارهای روزانه</h2>
        <AddTodo />
        <Todos />
      </section>
      <ToastContainer position="top-center" theme="colored" rtl={true} />
    </TodoContext.Provider>
  );
};
export default App;
