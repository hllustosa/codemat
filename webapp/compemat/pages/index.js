import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Typography,
  Fade,
} from "@material-ui/core";
import Page from "../components/Page";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  PRIMARY,
  GREY_2,
} from "../public/colors";

const styles = makeStyles((theme) => ({
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
  }
}));

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
              href={"/course"}
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
              href={"/course"}
              content={
                "Temos dezenas de exercícios que vão te ajudar a fixar o conteúdo e a desenvolver seu pensamento computacional."
              }
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card
              title={"Prepare-se"}
              image={"/img/exam.png"}
              height={"220"}
              href={"/course"}
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
      <Footer/>
    </React.Fragment>
  );
}

function Home() {
  return (
    <div>
      <Header message={"Comp & Mat: Um curso de programação e matemática"} submessage={"Repleto de questões do ENEM"} height={"300px"}/>
      <Body />
    </div>
  );
}

export default Page(Home);
