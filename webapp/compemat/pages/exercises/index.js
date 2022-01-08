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
    //minHeight: "calc(100vh - 68px)",
    margin: "auto",
    //backgroundColor: GREY_2,
    padding: "10px",
    zIndex: 0,
  },
}));

function Body(props) {
  const [search, setSearch] = React.useState("");
  const classes = styles();
  const cardHeight = "135px";
  const contentHeight = "90px";
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
        spacing={1}
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

        <Grid item xs={12} sm={6} md={3}>
          <Card
            title={"Programação"}
            image={"/img/programming.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=programming"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            title={"Aritmética e Porcentagem"}
            image={"/img/arithmetic.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=arithmetic"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            title={"Análise Combinatória"}
            image={"img/combinatorics.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=combinatorics"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            title={"Matemática Financeira"}
            image={"/img/finances.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=financial"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6}  md={3}>
          <Card
            title={"Funções"}
            image={"/img/functions.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=functions"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            title={"Probabilidade"}
            image={"/img/probability.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=probability"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6}  md={3}>
          <Card
            title={"Progressões"}
            image={"img/progression.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=progression"}
            contain
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            title={"Trigonometria"}
            image={"/img/trigonometry.svg"}
            height={cardHeight}
            contentHeight={contentHeight}
            href={"exercises/list?cat=trigonometry"}
            contain
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
