import React from "react";
import { makeStyles } from "@material-ui/core";
import { Grid, Typography, Hidden, Fade } from "@material-ui/core";
import UserMenu from "../components/UserMenu";
import Logo from "../components/Logo";
import Link from "next/link";
import routes from "../public/routes";
import HamburguerMenu from "../components/HamburguerMenu";
import {
  PRIMARY,
  PRIMARY_LIGHTER,
  CONTRAST_COLOR,
  SECONDARY,
} from "../public/colors";

const styles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "320px",
    backgroundColor: PRIMARY,
    backgroundImage: `url(/img/top.png)`,
    padding: "10px",
  },
  message: {
    color: CONTRAST_COLOR,
    fontSize: "calc(19px + (28 - 14) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "normal",
  },
  submessage: {
    color: SECONDARY,
    fontSize: "calc(15px + (22 - 14) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: "600",
    textAlign: "center",
  },
  author: {
    color: PRIMARY_LIGHTER,
    fontSize: "calc(10px + 2 * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: "600",
    textAlign: "center",
  },
  link: {
    color: SECONDARY,
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "None",
    "&:visited": {
      color: SECONDARY,
    },
    "&:hover": {
      color: CONTRAST_COLOR,
    },
  },
}));

function RowMenu() {
  const classes = styles();

  return (
    <nav>
      <Grid container item alignItems="center" spacing={2}>
        <Grid item>
          <Link href={routes.classes}>
            <a className={classes.link}>Aulas</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href={routes.exercises}>
            <a className={classes.link}>Exercícios</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href={routes.ide}>
            <a className={classes.link}>IDE</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href={routes.about}>
            <a className={classes.link}>Sobre</a>
          </Link>
        </Grid>
        <Grid item>
          <UserMenu />
        </Grid>
      </Grid>
    </nav>
  );
}

export default function Header(props) {
  const { headerTitle, headerSubTitle, headerAuthor, height } = props;
  const classes = styles();
  return (
    <header>
      <Grid
        className={classes.header}
        style={{ height: height }}
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid>
            <Logo />
          </Grid>
          <Grid>
            <Grid container direction="row" alignItems="center">
              <Grid>
                <Hidden smDown>
                  <RowMenu />
                </Hidden>
              </Grid>
              <Grid>
                <Hidden mdUp>
                  <HamburguerMenu />
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          container
          style={{ flex: "1" }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid>
            <Fade in timeout={3000}>
              <Typography className={classes.message}>{headerTitle}</Typography>
            </Fade>
          </Grid>
          <Grid>
            <Fade in timeout={3000}>
              <Typography className={classes.submessage}>
                {headerSubTitle}
              </Typography>
            </Fade>
          </Grid>
          {headerAuthor && (
            <Grid>
              <Fade in timeout={3000}>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href={headerAuthor.split("|")[1]}
                >
                  <Typography className={classes.author}>
                    {`por ${headerAuthor.split("|")[0]}`}
                  </Typography>
                </a>
              </Fade>
            </Grid>
          )}
        </Grid>
      </Grid>
    </header>
  );
}
