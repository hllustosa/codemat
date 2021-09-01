import BasePage from "../../../components/BasePage";
import AppBar from "../../../components/AppBar";
import DataGrid from "../../../components/DataGrid";
import { makeStyles, Grid } from "@material-ui/core";
import { GREY_2 } from "../../../public/colors";
import Title from "../../../components/Title";

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
      container
        className={classes.body}
        direction="column"
        justifyContent="flex-start"
        spacing={2}
      >
        <Grid item>
          <Title size={45}> Teste2 </Title>
        </Grid>
        <Grid item style={{flex:1, height : "400px"}}>
          <DataGrid />
        </Grid>
      </Grid>
    </div>
  );
}

function ExercisesList() {
  return [
    <AppBar key="appbar" title="Lista de Exercícios" />,
    <Body key="body" />,
  ];
}

export default BasePage(ExercisesList);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          category: "programming",
        },
      },
      {
        params: {
          category: "arithmetic",
        },
      },
      {
        params: {
          category: "combinatorics",
        },
      },
      {
        params: {
          category: "financial",
        },
      },
      {
        params: {
          category: "functions",
        },
      },
      {
        params: {
          category: "probability",
        },
      },
      {
        params: {
          category: "progression",
        },
      },
      {
        params: {
          category: "trigonometry",
        },
      },
      {
        params: {
          category: "unities",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const category = context.params.category;
  return {
    props: {
      exercises: [
        {
          id: "ex_Frf432D34ss",
          name: "Exercicio Teste 1",
        },
        {
          id: "ex_D4fd34D234d",
          name: "Exercicio Teste 2",
        },
        {
          id: "ex_G3Fer3rDS432",
          name: "Exercicio Teste 3",
        },
        {
          id: "ex_Plo43jjrR3",
          name: "Exercicio Teste 4",
        },
      ],
    },
  };
}
