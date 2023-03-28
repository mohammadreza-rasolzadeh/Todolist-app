const Todo = ({ text, completed, updated, deleted, onCompleted }) => {
  return (
    <li className={`list-item ${completed ? "completed" : null}`}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="checkbox"
          className="checkbox-btn"
          onClick={onCompleted}
          defaultChecked={completed}
        />
        <span className="text">
          {completed ? <del className="text">{text}</del> : text}
        </span>
      </div>
      <span className="btn-cotainer">
        <button className="edit-btn" onClick={updated}>
          <i className="fas fa-edit" />
        </button>
        <button className="delete-btn" onClick={deleted}>
          <i className="fas fa-trash" />
        </button>
      </span>
    </li>
  );
};
export default Todo;
