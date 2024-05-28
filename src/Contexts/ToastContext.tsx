import React, { createContext, useContext, useState, useRef, ReactNode } from "react";
import { CToaster, CToast, CToastBody, CToastHeader } from "@coreui/react";

interface Toast {
  id: number;
  status: string;
  text: string;
}

interface ToastContextProps {
  addToast: (status: string, text: string) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

let toastId = 0;

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const toasterRef = useRef<any>(null);

  const getColor = (status: string) => {
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

  const showToast = (status: string, text: string) => {
    // Check if a toast with the same content already exists
    if (toasts.some((toast) => toast.text === text && toast.status === status)) {
      return;
    }

    const newToast: Toast = {
      id: ++toastId,
      status,
      text,
    };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };

  const removeToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast: showToast }}>
      {children}
      <CToaster className="p-2" placement="top-end" ref={toasterRef}>
        {toasts.map((toast) => (
          <CToast
            key={toast.id}
            visible={true}
            autohide={true}
            animation={true}
            onClose={() => removeToast(toast.id)}
          >
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
                <rect
                  width="100%"
                  height="100%"
                  fill={getColor(toast.status)}
                ></rect>
              </svg>
              <div className="fw-bold me-auto">Notification</div>
              <small>Just now</small>
            </CToastHeader>
            <CToastBody>{toast.text}</CToastBody>
          </CToast>
        ))}
      </CToaster>
    </ToastContext.Provider>
  );
};
