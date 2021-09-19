import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import Logo from "./Logo";
import HamburguerMenu from "./HamburguerMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    justifyContent: "space-between",
  },
  title: {
    textAlign: "right",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <header className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={classes.appbar} variant="dense">
          <Logo />
          <Hidden xsDown    >
            <Typography className={classes.title} variant="h6" color="inherit">
              {title}
            </Typography>
          </Hidden>
          <HamburguerMenu />
        </Toolbar>
      </AppBar>
    </header>
  );
}
