import { Typography } from "@material-ui/core";
import { CONTRAST_COLOR } from "../public/colors";
import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  title: {
    textDecorationColor: CONTRAST_COLOR,
    textDecoration: "underline",
    textDecorationThickness : "4px",
    fontWeight: "600"
  },
}));

export default function Title(props) {
  const classes = styles();
  const { size } = props;

  return (
    <Typography
      className={classes.title}
      color="primary"
      styles={{ fontSize : size }}
    >
      {props.children}
    </Typography>
  );
}
