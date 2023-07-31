export const TodoItem = (props) => {
  const { item } = props;
  const { text, isCompleted } = item;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <button
          className={`btn btn-sm ${isCompleted ? "btn-success" : "btn-light"}`}
        >
          <i
            className={`bi ${isCompleted ? "bi-check-square" : "bi-square"}`}
          ></i>
        </button>
        {isCompleted ? (
          <span className="ms-2 text-decoration-line-through">{text}</span>
        ) : (
          <span className="ms-2">{text}</span>
        )}{" "}
      </div>
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
};
