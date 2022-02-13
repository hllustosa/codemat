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
  license: {
    position: "absolute",
    right: "10px",
    top: "10px",
  },
}));

export default function Footer() {
  const classes = styles();
  return (
    <footer style={{ position: "relative", top:"0px", left:"0px" }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className={classes.footer}
      >
        <Grid item>
          <Typography className={classes.footerText}>
            {"C&M (C) | " + new Date().getFullYear()}
          </Typography>
          <a rel="noopener noreferrer" target="_blank" href="/privacy.html">
            <Typography className={classes.footerText}>
              {"Política de Privacidade"}
            </Typography>
          </a>
        </Grid>
      </Grid>
      <div className={classes.license}>
        <a rel="license" href="http://creativecommons.org/licenses/by-nc/4.0/">
          <img
            alt="Licença Creative Commons"
            src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
          />
        </a><br/>
      </div>
    </footer>
  );
}
