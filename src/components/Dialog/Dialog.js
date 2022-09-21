import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export const CustomDialog = ({
  visible = false,
  handleClose = () => {},
  title = "",
  children,
}) => {
  return (
    <Dialog open={visible} keepMounted onClose={handleClose}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
