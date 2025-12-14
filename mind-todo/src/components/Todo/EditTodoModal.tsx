import { Modal, Form, Input } from "antd";
import type { Todo } from "../../types/todo.type";

interface Props {
  todo: Todo;
  onSave: (todo: Todo) => void;
  onCancel: () => void;
}

function EditTodoModal({ todo, onSave, onCancel }: Props) {
  const [form] = Form.useForm();

  return (
    <Modal
      open
      title="Edit Todo"
      onOk={() => form.submit()}
      onCancel={onCancel}
    >
      <Form
        form={form}
        initialValues={todo}
        onFinish={(values) =>
          onSave({ ...todo, ...values })
        }
        layout="vertical"
      >
        <Form.Item 
        name="name" 
        label="Name" 
        rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
        name="phone" 
        label="Phone" 
        rules={[{ required: true, message: "Please enter phone" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item 
        name="email" 
        label="Email" 
        rules={[
          { required: true, message: "Please enter email" },
          { type: "email", message: "Email is not valid" },
        ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default EditTodoModal;
