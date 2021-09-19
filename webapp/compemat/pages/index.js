import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Typography,
  Hidden,
  Fade,
} from "@material-ui/core";
import Page from "../components/Page";
import UserMenu from "../components/UserMenu";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Link from "next/link";
import routes from "../public/routes";
import HamburguerMenu from "../components/HamburguerMenu";
import {
  PRIMARY,
  GREY_2,
  CONTRAST_COLOR,
  SECONDARY,
  LINEAR_GREY_GRADIENT,
} from "../public/colors";

const styles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "350px",
    backgroundColor: PRIMARY,
    backgroundImage: `url(/img/top.png)`,
    padding: "10px",
  },
  message: {
    color: CONTRAST_COLOR,
    fontSize: "38px",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "normal",
  },
  submessage: {
    color: SECONDARY,
    fontSize: "22px",
    fontWeight: "600",
    textAlign: "center",
  },
  link: {
    color: SECONDARY,
    fontSize: "16px",
    fontWeight: "600",
    textDecoration: "None",
    "&:hover": {
      color: CONTRAST_COLOR,
    },
  },
  body: {
    width: "100%",
    padding: "10px",
    margin: "auto",
  },
  cupon: {
    width: "100%",
    padding: "10px",
    height: "200px",
    backgroundColor: GREY_2,
  },
  cuponText: {
    color: PRIMARY,
    fontSize: "30px",
    fontWeight: "600",
    textAlign: "center",
    lineHeight: "normal",
  },
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

function RowMenu() {
  const classes = styles();

  return (
    <nav>
      <Grid container item alignItems="center" spacing={2}>
        <Grid item>
          <Link href={routes.course}>
            <a className={classes.link}>Curso</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href={routes.exercises}>
            <a className={classes.link}>Exercícios</a>
          </Link>
        </Grid>
        <Grid item>
          <Link href={routes.tutorials}>
            <a className={classes.link}>Tutorial</a>
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


function Header() {
  const classes = styles();
  return (
    <header>
      <Grid
        className={classes.header}
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
              <Typography className={classes.message}>
                {"CompeMat: Um curso de programação e matemática"}
              </Typography>
            </Fade>
          </Grid>
          <Grid>
            <Fade in timeout={3000}>
              <Typography className={classes.submessage}>
                {"Repleto de questões do ENEM"}
              </Typography>
            </Fade>
          </Grid>
        </Grid>
      </Grid>
    </header>
  );
}

function Body() {
  const classes = styles();

  return (
    <React.Fragment>
      <main>
        <Grid
          className={classes.body}
          container
          justifyContent="center"
          spacing={2}
        >
          <Grid item xs={12} sm={4}>
            <Card
              title={"Curso Completo"}
              image={"/img/students.png"}
              height={"220"}
              content={
                "Um curso de reforço em matemática, baseado no conteúdo do ENEM, que vai te ajudar a dar os primeiros passos na programação."
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              title={"Pratique"}
              image={"/img/study.png"}
              height={"220"}
              content={
                "Temos centenas de exercícios que vão te ajudar a fixar o conteúdo e a desenvolver seu pensamento computacional."
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              title={"Prepare-se"}
              image={"/img/exam.png"}
              height={"220"}
              content={
                "Se familiarize com as questões de matemática do ENEM dos últimos anos e faça uma excelente prova."
              }
            />
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.cupon}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Fade in timeout={6000}>
            <Typography className={classes.cuponText}>
              {"Curso Gratuito no Udemy com o cupom:"}
            </Typography>
          </Fade>
          <Fade in timeout={6000}>
            <Typography className={classes.cuponText}>
              {"[Em Breve]"}
            </Typography>
          </Fade>
        </Grid>
      </main>
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
            {"Udemy | Youtube | Email"}
          </Typography>
        </Grid>
      </footer>
    </React.Fragment>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default Page(Home);
