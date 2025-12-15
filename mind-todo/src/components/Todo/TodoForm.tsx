import { Form, Input, Button } from "antd";
import type { Todo } from "../../types/todo.type";
import { AiTwotonePhone  } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

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
        <Input prefix={<AiOutlineUser   style={{ marginRight: 8 }} />} />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please enter phone" }]}
      >
        <Input prefix={<AiTwotonePhone  style={{ marginRight: 8 }} />} />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Please enter email" },
          { type: "email", message: "Email is not valid" },
        ]}
      >
        <Input prefix={<AiTwotoneMail  style={{ marginRight: 8 }} />} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Add Todo
      </Button>

    </Form>
  );
}

export default TodoForm;