import React from "react";
import UserMenu from "./UserMenu";
import routes from "../public/routes";
import { useRouter } from "next/router";
import {
  Button,
  Grid,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  Divider,
  Tooltip,
} from "@material-ui/core";
import { GREY_2, CONTRAST_COLOR, PRIMARY_LIGHT } from "../public/colors";
import MenuIcon from "@material-ui/icons/MenuRounded";
import LoginForm from "./LoginForm";
import store from "../redux/store";
import { getLogout } from "../redux/actions";
import Logout from "@material-ui/icons/ExitToApp";

export default function HamburguerMenu(props) {
  const isAuth = store.getState().isLogged;
  const user = store.getState().user;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loginOpen, setLoginOpen] = React.useState(false);
  const open = Boolean(anchorEl);

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
  };

  const gotToProfile = () => {
    window.location = "/profile";
  };

  const router = useRouter();

  const goTo = (place) => () => {
    if (place) router.push(place);
  };

  return (
    <React.Fragment>
      <LoginForm open={loginOpen} onClose={() => setLoginOpen(false)} />
      <Box
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Menu">
          <IconButton style={{ color: GREY_2 }} onClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          style: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              top: 200,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 25,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {isAuth && (
          <React.Fragment>
            {" "}
            <MenuItem onClick={gotToProfile}>
              <Avatar
                style={{
                  width: 32,
                  height: 32,
                  marginLeft: "-5px",
                  marginRight: "10px",
                }}
                src={user.photoURL}
              >
                {user.email[0].toUpperCase()}
              </Avatar>{" "}
              Perfil
            </MenuItem>
            <MenuItem onClick={logout}>
              <ListItemIcon style={{ marginRight: "-25px" }}>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>{" "}
          </React.Fragment>
        )}

        {!isAuth && (
          <React.Fragment>
            <MenuItem
              style={{ color: PRIMARY_LIGHT }}
              color="secondary"
              onClick={() => setLoginOpen(true)}
            >
              Entrar
            </MenuItem>
          </React.Fragment>
        )}

        <Divider />
        <MenuItem onClick={goTo(routes.course)}>Curso</MenuItem>
        <MenuItem onClick={goTo(routes.exercises)}>Exercícios</MenuItem>
        <MenuItem onClick={goTo(routes.tutorials)}>Tutoriais</MenuItem>
        <MenuItem onClick={goTo(routes.about)}>Sobre</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
