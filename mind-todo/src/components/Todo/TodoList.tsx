import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Todo } from "../../types/todo.type";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
}

function TodoList({ todos, onDelete }: Props) {
  const columns: ColumnsType<Todo> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      render: (_, record) => (
        <Button danger onClick={() => onDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <Table
      rowKey="id"
      columns={columns}
      dataSource={todos}
      pagination={false}
    />
  );
}

export default TodoList;
