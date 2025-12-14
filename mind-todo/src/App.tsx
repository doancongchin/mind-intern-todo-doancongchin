import { useState } from "react";
import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import EditTodoModal from "./components/Todo/EditTodoModal";
import { Input } from "antd";
import type { Todo } from "./types/todo.type";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [search, setSearch] = useState("");

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const openEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const updateTodo = (update: Todo) => {
    setTodos((prev) => 
    prev.map((t) => (t.id === update.id ? update : t))
    );
    setEditingTodo(null);
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
  const keyword = search.toLowerCase();

  return (
    todo.name.toLowerCase().includes(keyword) 
  );
});

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List </h2>

      <TodoForm onAdd={addTodo} />

      <hr />
      <Input.Search
        placeholder="Search name "
        allowClear
        style={{ marginBottom: 16, width: 300 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onEdit={openEdit}
      />

      {editingTodo && (
        <EditTodoModal
          todo={editingTodo}
          onSave={updateTodo}
          onCancel={() => setEditingTodo(null)}
        />
      )}


    </div>

  );
}

export default App;
