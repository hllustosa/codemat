import React from "react";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import LoginForm from "./LoginForm";
import AccountCircle from "@material-ui/icons/AccountCircle";
import store from "../redux/store";
import { getLogout } from "../redux/actions";

export default function UserMenu() {
  const isAuth = store.getState().isLogged;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginOpen, setLoginOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    store.dispatch(getLogout());
    handleClose();
    window.location = "/";
  }

  return (
    <React.Fragment>
      <LoginForm open={loginOpen} onClose={() => setLoginOpen(false)} />
      {!isAuth && (
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={() => setLoginOpen(true)}
        >
          Entrar
        </Button>
      )}
      {isAuth && (
        <React.Fragment>
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
            <MenuItem onClick={handleClose}>Perfil</MenuItem>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
