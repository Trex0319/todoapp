import { TodoItem } from "./TodoItem";

export const TodoList = (props) => {
  const { todos } = props;
  return (
    <div>
      <ul class="list-group">
        {todos.map((item) => {
          return <TodoItem item={item} key={item.id} />;
        })}
      </ul>
    </div>
  );
};
