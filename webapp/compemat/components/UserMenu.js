import React from "react";
import { Button, IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import store from "../redux/store";

export default function UserMenu() {
  const isAuth = store.getState().isLogged;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      {!isAuth && (
        <Button variant="contained" size="small" color="secondary">
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
            <MenuItem onClick={handleClose}>Sair</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
