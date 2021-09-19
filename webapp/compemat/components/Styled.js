import {
  Typography,
  Button,
  IconButton,
  Chip,
  CircularProgress,
  TextField,
  Snackbar,
  Grid
} from "@material-ui/core";
import { CONTRAST_COLOR } from "../public/colors";
import { makeStyles } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: "600",
  },
}));

export function Title(props) {
  const classes = styles();
  const { size } = props;

  return (
    <Typography
      className={classes.title}
      color="primary"
      style={{ fontSize: size }}
      {...props}
    >
      {props.children}
    </Typography>
  );
}

export function BaseIconButton(props) {
  return (
    <IconButton color="primary" variant="outlined" size="small" {...props}>
      {props.children}
    </IconButton>
  );
}

export function Progress(props) {
  return (
    <CircularProgress
      color="primary"
      variant="indeterminate"
      size={16}
      {...props}
    />
  );
}

export function BaseChip(props) {
  return (
    <Chip
      color="primary"
      size="small"
      {...props}
      style={{ ...props.style, color: CONTRAST_COLOR, marginRight: "3px" }}
    >
      {props.children}
    </Chip>
  );
}

export function NoWrap(props) {
  return (
    <div
      {...props}
      style={{
        ...props.style,
        display: "flex",
        whiteSpace: props.off ? "normal" : "nowrap",
      }}
    >
      {props.children}
    </div>
  );
}

export function NoWrapContainer(props) {
  return (
    <div {...props} style={{ minWidth: "290px", whiteSpace: "normal" }}>
      {" "}
      {props.children}{" "}
    </div>
  );
}

export function NoWrapHtmlContainer(props) {
  return <div {...props} style={{ minWidth: "200px", whiteSpace: "normal" }} />;
}

export function OutlinedButton(props) {
  return (
    <Button
      color="primary"
      variant="outlined"
      size="small"
      disableElevation
      {...props}
    >
      {props.children}
    </Button>
  );
}

export function ContainedButton(props) {
  return (
    <Button
      color="primary"
      variant="contained"
      size="small"
      disableElevation
      fullWidth
      {...props}
    >
      {props.children}
    </Button>
  );
}

export function TextButton(props) {
  return (
    <Button color="primary" size="small" disableElevation fullWidth {...props}>
      {props.children}
    </Button>
  );
}

export function Input(props) {
  return (
    <TextField
      fullWidth
      label="Outlined"
      variant="outlined"
      size="small"
      {...props}
    />
  );
}

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export function ErrorMessage(props) {
  const { open, handleClose, errorMessage } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={errorMessage}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="error">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
}

export function SuccessMessage(props) {
  const { open, handleClose, errorMessage } = props;

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={errorMessage}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity="success">
        {errorMessage}
      </Alert>
    </Snackbar>
  );
}

export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Grid container justifyContent="center">
          {children}
        </Grid>
      )}
    </div>
  );
}
