import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography } from "@material-ui/core";

import { CONTRAST_COLOR, LINEAR_GREY_GRADIENT } from "../public/colors";

const styles = makeStyles((theme) => ({
  footer: {
    width: "100%",
    padding: "10px",
    height: "50px",
    background: LINEAR_GREY_GRADIENT,
  },
  footerText: {
    color: CONTRAST_COLOR,
    fontSize: "12px",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "normal",
  },
}));

export default function Footer() {
  const classes = styles();
  return (
    <footer>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        className={classes.footer}
      >
        <Typography className={classes.footerText}>
          {"C&M (C) | 2021"}
        </Typography>
        <Typography className={classes.footerText}>
          {"Email | YouTube"}
        </Typography>
      </Grid>
    </footer>
  );
}
