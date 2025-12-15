import { useState } from "react";
import { Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import TodoForm from "../../components/Todo/TodoForm";
import TodoList from "../../components/Todo/TodoList";
import EditTodoModal from "../../components/Todo/EditTodoModal";
import type { Todo } from "../../types/todo.type";
import type { RootState, AppDispatch } from "../../store";
import {
  addTodo as addTodoAction,
  deleteTodo as deleteTodoAction,
  updateTodo as updateTodoAction,
} from "../../features/todo/todoSlice";

function TodoPage() {
  const dispatch = useDispatch<AppDispatch>();

  const todos = useSelector(
    (state: RootState) => state.todo.todos
  );

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [search, setSearch] = useState("");

  const openEdit = (todo: Todo) => {
    setEditingTodo(todo);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: 20 }}>
      <h2>Todo List</h2>

      <TodoForm
        onAdd={(todo) => dispatch(addTodoAction(todo))}
      />

      <hr />

      <Input.Search
        placeholder="Search name"
        allowClear
        style={{ marginBottom: 16, width: 300 }}
        onChange={(e) => setSearch(e.target.value)}
      />

      <TodoList
        todos={filteredTodos}
        onDelete={(id) => dispatch(deleteTodoAction(id))}
        onEdit={openEdit}
      />

      {editingTodo && (
        <EditTodoModal
          todo={editingTodo}
          onSave={(todo) => {
            dispatch(updateTodoAction(todo));
            setEditingTodo(null);
          }}
          onCancel={() => setEditingTodo(null)}
        />
      )}
    </div>
  );
}

export default TodoPage;
