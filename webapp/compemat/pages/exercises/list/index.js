import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AppBar from "../../../components/AppBar";
import Page from "../../../components/Page";
import SearchField from "../../../components/SearchField";
import { useQueryParams } from "../../../seedwork/Utils";
import {
  makeStyles,
  IconButton,
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";
import { GREY_2, PRIMARY } from "../../../public/colors";
import problems from "../../../public/problems/index.json";
import { translateCategory } from "../../../seedwork/Translations";
import PaginatedList from "../../../components/PaginatedList";

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
  link: {
    fontSize: "10px",
    textDecoration: "none",
  },
}));

function Body() {
  const classes = styles();
  const router = useRouter();
  const { q, cat } = useQueryParams();
  const [search, setSearch] = React.useState(q ? q : "");
  const [category, setCategory] = React.useState(cat ? cat : cat);
  const [filteredProblems, setFilteredProblems] = React.useState([]);

  useEffect(() => {
    const keys = Object.keys(problems);
    const foundProblems = keys
      .map((key) => problems[key])
      .filter((item) => {
        if (!search && !category) {
          return true;
        }

        if (item.name.toUpperCase().includes(search.toUpperCase())) {
          if (category) {
            return item.category.toUpperCase().includes(category.toUpperCase());
          }

          return true;
        }

        return false;
      });

    setFilteredProblems(foundProblems);
  }, [search, category]);

  const goTo = (place) => () => {
    if (place) router.push(place);
  };

  const renderItem = (item, index) => {
    return [
      <ListItem key={`trial-${index}`}>
        <ListItemText
          primary={<Link href={`/exercises/${item.id}`}>{item.name}</Link>}
          primaryTypographyProps={{ style: { color: PRIMARY } }}
          secondary={translateCategory(item.category)}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="ver"
            color="primary"
            onClick={goTo(`/exercises/${item.id}`)}
          >
            <VisibilityRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
      <Divider key={`divider-${index}`} />,
    ];
  };

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
        <Grid item className={classes.grid}>
          <PaginatedList
            data={filteredProblems}
            listItem={renderItem}
            listStyles={{ width: "100%" }}
          />
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
