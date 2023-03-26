const Todo = ({ text, updated, deleted }) => {
  return (
    <>
      <li className="list-item">
        <span className="text">{text}</span>
        <span className="btn-cotainer">
          <button className="edit-btn" onClick={updated}>
            <i className="fas fa-edit" />
          </button>
          <button className="delete-btn" onClick={deleted}>
            <i className="fas fa-trash" />
          </button>
        </span>
      </li>
    </>
  );
};
export default Todo;
