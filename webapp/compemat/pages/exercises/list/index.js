import React from "react";
import AppBar from "../../../components/AppBar";
import Page from "../../../components/Page";
import SearchField from "../../../components/SearchField";
import DataGrid from "../../../components/DataGrid";
import { makeStyles, Grid, Chip } from "@material-ui/core";
import { GREY_2, PRIMARY } from "../../../public/colors";

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
  grid: {
    flex: 1,
    height: "400px",
  },
}));

const columns = [
  {
    id: "exercise-name",
    field: "name",
    headerName: "Exercício",
    flex: 2,
    disableColumnMenu: true,
    resizable: false,
    sortable: false,
    filterable: false,
    hideSortIcons: true,
  },
  {
    id: "category",
    flex: 1,
    field: "category",
    headerName: "Categoria",
    align: "right",
    disableColumnMenu: true,
    resizable: false,
    sortable: false,
    filterable: false,
    hideSortIcons: true,
    renderCell: (params) => (
      params.value && <Chip
        color="primary"
        label={params.value}
      />
    ),
  },
  {
    id: "access",
    flex: 1,
    field: "id",
    headerName: "  ",
    align: "right",
    disableColumnMenu: true,
    resizable: false,
    sortable: false,
    filterable: false,
    hideSortIcons: true,
    renderCell: (params) => (
      <a
        style={{ textDecoration: "none", color: PRIMARY }}
        href={`/exercises/${params.value}`}
      >
        Visualizar
      </a>
    ),
  },
];

const data = [
  {
    id: "ex_Frf432D34ss",
    name: "Exercicio Teste 1",
    category: "Programação"
  },
  {
    id: "ex_D4fd34D234d",
    name: "Exercicio Teste 2",
    category: "Unidades"
  },
  {
    id: "ex_G3Fer3rDS432",
    name: "Exercicio Teste 3",
    category: "Trigonometria"
  },
  {
    id: "ex_Plo43jjrR3",
    name: "Exercicio Teste 4",
  },
];

function Body() {
  const classes = styles();

  return (
    <main className={classes.body}>
      <Grid
        container
        className={classes.body}
        direction="column"
        justifyContent="flex-start"
        spacing={2}
      >
        <Grid item>
          <SearchField />
        </Grid>
        <Grid item className={classes.grid}>
          <DataGrid columns={columns} rows={data} />
        </Grid>
      </Grid>
    </main>
  );
}

function ExercisesList() {
  return (
    <React.Fragment>
      <AppBar title="Lista de Exercícios" />
      <Body />
    </React.Fragment>
  );
}

export default Page(ExercisesList);
