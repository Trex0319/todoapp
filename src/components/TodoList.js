import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  return (
    <div>
      <ul class="list-group">
        {props.todos.map((item) => {
          return <TodoItem item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
