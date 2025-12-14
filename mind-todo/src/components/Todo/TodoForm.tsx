import { Form, Input, Button } from "antd";
import type { Todo } from "../../types/todo.type";

interface Props {
  onAdd: (todo: Todo) => void;
}

function TodoForm({ onAdd }: Props) {
  const [form] = Form.useForm();

  const onFinish = (values: Omit<Todo, "id">) => {
    onAdd({
      id: Date.now(),
      ...values,
    });

    form.resetFields();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      style={{ maxWidth: 400 }}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please enter phone" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter email" },
          { type: "email", message: "Email is not valid" },
        ]}
      >
        <Input />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Add Todo
      </Button>

    </Form>
  );
}

export default TodoForm;