import BasePage from "../../components/BasePage";
import AppBar from "../../components/AppBar";
import Card from "../../components/Card";
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

function Body() {
  const classes = styles();
  return (
    <div className={classes.body}>
      <Grid
        className={classes.body}
        container
        justifyContent="center"
        spacing="2"
      >
        <Grid item xs={12} md={12}>
          <Card
            title={"Programação"}
            image={"programming.jpg"}
            height={"220"}
            href={"exercises/list/programming"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Aritmética e Porcentagem"}
            image={"arithmetic.jpg"}
            height={"120"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Análise Combinatória"}
            image={"combinatorics.jpg"}
            height={"120"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Matemática Financeira"}
            image={"financial.jpg"}
            height={"120"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title={"Funções"} image={"functions.jpg"} height={"120"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Probabilidade"}
            image={"probability.jpg"}
            height={"120"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Progressão Geométrica"}
            image={"progression.jpg"}
            height={"120"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card
            title={"Trigonometria"}
            image={"trigonometry.png"}
            height={"120"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Card title={"Unidades"} image={"units.jpg"} height={"120"} />
        </Grid>
      </Grid>
    </div>
  );
}

function Exercises() {
  return [<AppBar key="appbar" title="Exercícios" />, <Body key="body"/>];
}

export default BasePage(Exercises);
