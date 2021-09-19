import React from "react";
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  Box,
  ListItemIcon,
  Divider,
  Tooltip,
  IconButton,
} from "@material-ui/core";
import { useRouter } from "next/router";
import LoginForm from "./LoginForm";
import store from "../redux/store";
import { getLogout } from "../redux/actions";
import Logout from "@material-ui/icons/ExitToApp";

export default function UserMenu() {
  const isAuth = store.getState().isLogged;
  const user = store.getState().user;
  const [loginOpen, setLoginOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
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
      {isAuth && <AccountMenu user={user} />}
    </div>
  );
}

function AccountMenu(props) {
  const { user } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
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

  const router = useRouter();
  const goTo = (place) => () => {
    if (place) router.push(place);
  };

  return (
    <React.Fragment>
      <Box
        style={{ display: "flex", alignItems: "center", textAlign: "center" }}
      >
        <Tooltip title="Minha Conta">
          <IconButton onClick={handleClick} size="small" style={{ ml: 2 }}>
            <Avatar style={{ width: 32, height: 32 }} src={user.photoURL}>
              {user.email[0].toUpperCase()}
            </Avatar>
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
        <MenuItem onClick={goTo('/profile')}>
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
        <Divider /> 
        <MenuItem onClick={logout}>
          <ListItemIcon style={{ marginRight: "-25px" }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
