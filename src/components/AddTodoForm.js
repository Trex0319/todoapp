import { useState } from "react";

export const AddTodoForm = (props) => {
  const [input, setInput] = useState("");

  const [list, setList] = useState([]);

  return (
    <div className="card rounded shadow-sm m-5">
      <div className="card-body">
        <h3 className="card-title mb-3">{props.title}</h3>
        <ul className="list-group">
          {/* {todos.map((todo) => {
            return <AddItem key={todo.id} todo={todo} />;
          })} */}
          {list.map((item, index) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center"
              key={index}
            >
              <div>
                <button className="btn btn-sm btn-light">
                  <i className="bi bi-square"></i>
                </button>
                <span className="ms-2">{item.text}</span>
              </div>
              <button className="btn btn-sm btn-danger">
                <i className="bi bi-trash"></i>
              </button>
            </li>
          ))}
          <div className="mt-4">
            <form
              className="d-flex justify-content-between align-items-center"
              onSubmit={(event) => {
                event.preventDefault();
                const newList = [...list];
                newList.push({
                  id: newList.length + 1,
                  text: input,
                });
                setList(newList);
                setInput("");
              }}
            >
              <input
                type="text"
                className="form-control"
                placeholder="Add new item..."
                value={input}
                onChange={(event) => {
                  setInput(event.target.value);
                }}
              />
              <button
                // onClick={addButton}
                className="btn btn-primary btn-sm rounded ms-2"
              >
                Add
              </button>
            </form>
          </div>
        </ul>
      </div>
    </div>
  );
};
