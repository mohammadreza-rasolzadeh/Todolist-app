import { createContext } from "react";

export const TodoContext = createContext({
  todo: "",
  todos: [],
  filtredTodos: [],
  edit: false,
  editID: "",
  setEdit: () => {},
  setEditID: () => {},
  setTodo: () => {},
  setTodos: () => {},
  setFiltredTodos: () => {},
  onSubmitForm: () => {},
  onUpdateTodo: () => {},
  onDeleteTodo: () => {},
  onCompletedTodo: () => {},
  onSearchTodo: () => {},
  onFiltredTodos: () => {},
  clearList: () => {},
});
