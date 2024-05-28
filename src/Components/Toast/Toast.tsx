import { CToast, CToastBody, CToastHeader } from "@coreui/react";

interface ToastProps {
  status: string;
  text: string;
  visible: boolean;
  onClose: () => void;
}

const Toast = ({ status, text, visible, onClose }: ToastProps) => {
  const getColor = () => {
    switch (status) {
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "yellow";
      default:
        return "blue";
    }
  };

  return (
    <CToast animation={false} autohide={false} visible={visible} onClose={onClose}>
      <CToastHeader closeButton>
        <svg
          className="rounded me-2"
          width="20"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" fill={getColor()}></rect>
        </svg>
        <div className="fw-bold me-auto">Notification</div>
      </CToastHeader>
      <CToastBody>{text}</CToastBody>
    </CToast>
  );
};

export default Toast;
