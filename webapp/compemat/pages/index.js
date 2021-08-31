import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Hidden,
  Menu,
  MenuItem,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import Logo from "../components/Logo";
import store from "../redux/store";
import BasePage from "../components/BasePage";
import { PRIMARY, CONTRAST_COLOR, SECONDARY } from "../public/colors";
import Link from "next/link";

const styles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "350px",
    backgroundColor: PRIMARY,
    backgroundImage: `url(./top.png)`,
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
}));

function RowMenu() {
  const goTo = (location) => {
    return () => {};
  };

  return (
    <Grid container item alignItems="center">
      <Link href="/course">
        <Button color="secondary" onClick={goTo("/course")}>
          Curso
        </Button>
      </Link>
      <Button color="secondary" onClick={goTo("/exercise-categories")}>
        Exercícios
      </Button>
      <Button color="secondary" onClick={goTo("/tutorials")}>
        Tutoriais
      </Button>
      <Button color="secondary" onClick={goTo("/about")}>
        Sobre
      </Button>
    </Grid>
  );
}

function UserMenu() {
  const isAuth = store.getState().isLogged;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <fragment>
      <IconButton color="secondary" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!isAuth && <MenuItem onClick={handleClose}>Entrar</MenuItem>}
        {isAuth && <MenuItem onClick={handleClose}>Perfil</MenuItem>}
        {isAuth && <MenuItem onClick={handleClose}>Sair</MenuItem>}
      </Menu>
    </fragment>
  );
}

function HamburguerMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container item alignItems="center">
      <IconButton color="secondary" onClick={handleClick}>
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Curso</MenuItem>
        <MenuItem onClick={handleClose}>Exercícios</MenuItem>
        <MenuItem onClick={handleClose}>Tutoriais</MenuItem>
        <MenuItem onClick={handleClose}>Sobre</MenuItem>
      </Menu>
    </Grid>
  );
}

function Header() {
  const classes = styles();
  return (
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
          <Logo></Logo>
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
            <Grid>
              <UserMenu />
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
          <Typography className={classes.message}>
            {"Dê os primeiros passos na programação"}
          </Typography>
        </Grid>
        <Grid>
          <Typography className={classes.submessage}>
            {"Enquanto pratica para o ENEM"}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Home() {
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default BasePage(Home);
