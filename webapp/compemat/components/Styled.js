import { Typography, Button, IconButton, Chip } from "@material-ui/core";
import { CONTRAST_COLOR } from "../public/colors";
import { makeStyles } from "@material-ui/core";

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

export function BaseChip(props) {
    return (
      <Chip color="primary" size="small" {...props} style={{...props.style, color: CONTRAST_COLOR, marginRight:"3px"}}>
        {props.children}
      </Chip>
    );
  }

export function NoWrap(props) {
  return (
    <div {...props} style={{ ...props.style, display: "flex", whiteSpace: props.off ? "normal" : "nowrap" }}>
      {props.children}
    </div>
  );
}

export function NoWrapContainer(props) {
  return (
    <div {...props} style={{ minWidth: "320px", whiteSpace: "normal" }}> {props.children} </div>
  );
}

export function NoWrapHtmlContainer(props) {
  return (
    <div {...props} style={{ minWidth: "320px", whiteSpace: "normal" }}/>
  );
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
      variant="outlined"
      size="small"
      disableElevation
      {...props}
    >
      {props.children}
    </Button>
  );
}
