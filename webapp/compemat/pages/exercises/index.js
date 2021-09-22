import React from "react";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import AppBar from "../../components/AppBar";
import Card from "../../components/Card";
import SearchField from "../../components/SearchField";
import { makeStyles, Grid } from "@material-ui/core";
import { GREY_2 } from "../../public/colors";

const styles = makeStyles((theme) => ({
  body: {
    maxWidth: "1000px",
    width: "100%",
    minHeight: "calc(100vh - 68px)",
    margin: "auto",
    backgroundColor: GREY_2,
    padding: "10px",
    zIndex: 0,
  },
}));

function Body(props) {
  const [search, setSearch] = React.useState("");
  const classes = styles();
  props.setTitle("C & M: Exercícios de Programação");

  const router = useRouter();
  const goTo = (place) => () => {
    if (place) router.push(place);
  };

  return (
    <main className={classes.body}>
      <Grid
        className={classes.body}
        container
        justifyContent="center"
        spacing={2}
      >
        <Grid item xs={12} md={12}>
          <SearchField
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.which === 13) { 
                goTo(`/exercises/list?q=${search}`)();
              }
            }}
            onClick={goTo(`/exercises/list?q=${search}`)}
          />
        </Grid>

        <Grid item xs={12} md={12}>
          <Card
            title={"Programação"}
            image={"/img/programming.jpg"}
            height={"220"}
            href={"exercises/list?cat=programming"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Aritmética e Porcentagem"}
            image={"/img/arithmetic.jpg"}
            height={"120"}
            href={"exercises/list?cat=arithmetic"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Análise Combinatória"}
            image={"img/combinatorics.jpg"}
            height={"120"}
            href={"exercises/list?cat=combinatorics"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Matemática Financeira"}
            image={"/img/financial.jpg"}
            height={"120"}
            href={"exercises/list?cat=financial"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Funções"}
            image={"/img/functions.jpg"}
            height={"120"}
            href={"exercises/list?cat=functions"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Probabilidade"}
            image={"/img/probability.jpg"}
            height={"120"}
            href={"exercises/list?cat=probability"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Progressão Geométrica"}
            image={"img/progression.jpg"}
            height={"120"}
            href={"exercises/list?cat=progression"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Trigonometria"}
            image={"/img/trigonometry.png"}
            height={"120"}
            href={"exercises/list?cat=trigonometry"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Unidades"}
            image={"/img/units.jpg"}
            height={"120"}
            href={"exercises/list?cat=unities"}
          />
        </Grid>
      </Grid>
    </main>
  );
}

function Exercises(props) {
  return (
    <React.Fragment>
      <AppBar title="Exercícios" />
      <Body {...props} />
    </React.Fragment>
  );
}

export default Page(Exercises);
