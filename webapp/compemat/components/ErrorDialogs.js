import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles({
  root: {
    maxWidth: "550px",
    width: "100%",
    padding: "15px",
    fontWeight: "600"
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
      aria-labelledby="error-dialog-title"
      open={open}
    >
      <DialogTitle id="error-dialog">Detalhes do Erro</DialogTitle>
      <div className={classes.root} dangerouslySetInnerHTML={{ __html: content }}></div>
    </Dialog>
  );
}
