import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "550px",
    width: "100%",
    padding: "25px",
    fontWeight: "400"
  },
});

export default function ErrorDialog(props) {
  const classes = useStyles();
  const { onClose, open, content } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="login-dialogo"
      open={open}
    >
      
    </Dialog>
  );
}
