import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/auth";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Modal.confirm({
      title: "Confirm logout",
      content: "Are you sure you want to logout?",
      okText: "Logout",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        logout();
        navigate("/login");
      },
    });
  };

  return (
    <Button danger onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default Logout;
