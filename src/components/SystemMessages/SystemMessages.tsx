import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

interface AlertProps {
  show: boolean;
  message: string;
  type: "error" | "info" | "success" | "warning";
  onClose?: () => void;
}

const SystemMessages = ({ message, type, onClose, show }: AlertProps) => {
  const [open, setOpen] = useState(show);

  const handleClose = () => {
    setOpen(!open);
    onClose?.();
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={1000}
      anchorOrigin={{ horizontal: "center", vertical: "top" }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default SystemMessages;
