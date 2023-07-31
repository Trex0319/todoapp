import { useState } from "react";

export const AddTodoForm = (props) => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const add = () => {
    setList([...list, input]);
    setInput("");
  };

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
                <button
                  onClick={() => {
                    const newDone = list.map((done) => {
                      if (done.id === item.id) {
                        const doneTodos = { ...done };
                        if (done.isCompleted === true) {
                          doneTodos.isCompleted = false;
                        } else if (done.isCompleted === false) {
                          doneTodos.isCompleted = true;
                        }
                        return doneTodos;
                      } else {
                        return done;
                      }
                    });
                    setList(newDone);
                  }}
                  className={`btn btn-sm ${
                    item.isCompleted ? "btn-success" : "btn-light"
                  }`}
                >
                  <i
                    className={`bi ${
                      item.isCompleted ? "bi-check-square" : "bi-square"
                    }`}
                  ></i>
                </button>
                {item.isCompleted ? (
                  <span className="ms-2 text-decoration-line-through">
                    {item.text}
                  </span>
                ) : (
                  <span className="ms-2">{item.text}</span>
                )}
              </div>
              <button
                className="btn btn-danger"
                onClick={() => {
                  const newInput = list.filter((num) => num.id !== item.id);
                  setList(newInput);
                }}
              >
                Delete
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
                  id: Math.random(),
                  text: input,
                  isCompleted: false,
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
