import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { closeSnackbarAction } from "src/store/actions/app.actions";

const SnackbarContainer = () => {
  const { data } = useSelector((state) => state.app);
  const d = useDispatch();
  const handleClose = () => d(closeSnackbarAction());

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={!!data?.open}
      autoHideDuration={3000}
      onClose={handleClose}
      action={action}
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <Alert onClose={handleClose} severity={data?.type || "success"}>
        {data?.message || "Message"}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarContainer;
