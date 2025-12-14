import { Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import type { Todo } from "../../types/todo.type";

interface Props {
  todos: Todo[];
  onDelete: (id: number) => void;
  onEdit: (todo: Todo) => void;
}

function TodoList({ todos, onDelete, onEdit }: Props) {
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
        <>
          <Button onClick={() => onEdit(record)}>Edit</Button>
          <Button danger onClick={() => onDelete(record.id)} style={{ marginLeft: 8 }}>
            Delete
          </Button>
        </>
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
