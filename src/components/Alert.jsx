import { useEffect, useContext } from "react";

import { TodoContext } from "../context/TodoContext";

const Alert = ({ action, message }) => {
  const { showAlert } = useContext(TodoContext);
  useEffect(() => {
    const timer = setTimeout(() => {
      showAlert();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return <p className={`alert alert-${action}`}>{message}</p>;
};
export default Alert;
