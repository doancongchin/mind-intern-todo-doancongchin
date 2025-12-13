import { useState } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import type { Todo } from "./types/todo.type";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List </h2>

      <TodoForm onAdd={addTodo} />

      <hr />

      <TodoList todos={todos} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
