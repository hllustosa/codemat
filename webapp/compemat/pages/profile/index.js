import React, { useEffect } from "react";
import Page from "../../components/Page";
import AppBar from "../../components/AppBar";
import {
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import {
  TabPanel,
  Input,
  ContainedButton,
  ErrorMessage,
  SuccessMessage,
} from "../../components/Styled";
import { GREY_2, PRIMARY_LIGHT } from "../../public/colors";
import store from "../../redux/store";
import { getUserStats, updatePassword } from "../../seedwork/Requests";

const styles = makeStyles((theme) => ({
  body: {
    maxWidth: "1000px",
    width: "100%",
    minHeight: "calc(100vh - 130px)",
    margin: "auto",
    marginTop: "70px",
    backgroundColor: GREY_2,
    zIndex: 0,
    borderRadius: "15px",
  },
  avatar: {
    position: "relative",
    height: "120px",
    width: "120px",
    top: "-55px",
    left: "50%",
    fontSize: "30px",
    transform: "translateX(-50%)",
  },
  container: {
    padding: "15px",
    marginTop: "-60px",
  },
  base: {
    width: "300px",
    maxWidth: "300px",
    padding: "10px",
  },
  name: {
    fontWeight: "600",
    fontSize: "33px",
    textAlign: "center",
  },
}));

function BarGraph() {}

function PieGraph() {}

function ProblemsList(props) {
  const { data } = props;
  return (
    <div style={{ width: "100%" }}>
      <List>
        {data.trials.map((item, index) => [
          <ListItem key={`trial-${index}`}>
            <ListItemText
              primary={`Problema ${item.problem_id}`}
              secondary={item.status}
            />
          </ListItem>,
          <Divider key={`divider-${index}`} />,
        ])}
      </List>
    </div>
  );
}

function SubmissionsList() {
  return <div></div>;
}

function Security() {
  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState("");

  const classes = styles();

  useEffect(() => {
    if (!oldPassword) {
      setValidationMessage("Informe a sua senha.");
      return;
    }

    if (!password) {
      setValidationMessage("Senha é obrigatória.");
      return;
    }

    if (password.length < 6) {
      setValidationMessage("Senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== passwordCheck) {
      setValidationMessage("Senha e verificação de senha são diferentes.");
      return;
    }

    setValidationMessage("");
  }, [password, passwordCheck]);

  const updateUserPassword = (password, setSuccessMessage, setErrorMessage) => {
    updatePassword(oldPassword, password)
      .then(() => {
        setSuccessMessage("Senha alterada com sucesso");
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Não foi possível alterar a senha");
      });
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classes.base}
    >
      <ErrorMessage
        open={errorMessage}
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage("")}
      />

      <SuccessMessage
        open={successMessage}
        errorMessage={successMessage}
        handleClose={() => setSuccessMessage("")}
      />

      <Grid
        style={{ height: "calc(100% - 20px)" }}
        item
        container
        direction="column"
        justifyContent="center"
      >
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          style={{ height: "100%" }}
        >
          <Grid container item direction="column">
            <Grid item style={{ marginBottom: "10px" }}>
              <Typography style={{ textAlign: "center" }}>
                Redefinição de Senha
              </Typography>
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Input
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                label="Senha Atual"
                type="password"
              />
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Nova Senha"
                type="password"
              />
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Input
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
                label="Confirmar Nova Senha"
                type="password"
              />
            </Grid>
            <Grid item style={{ marginBottom: "10px", maxWidth: "300px" }}>
              <Typography size={12}>{validationMessage}</Typography>
            </Grid>
          </Grid>

          <Grid item style={{ marginBottom: "10px" }}>
            <ContainedButton
              disabled={validationMessage}
              onClick={() =>
                updateUserPassword(password, setSuccessMessage, setErrorMessage)
              }
            >
              Redefinir
            </ContainedButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Body() {
  const classes = styles();
  const user = store.getState().user;
  const [value, setValue] = React.useState(2);
  const [data, setData] = React.useState({ trials: [], submissions: [] });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(async () => {
    if (typeof window !== "undefined" && store.getState().isLogged) {
      const userData = await getUserStats();
      setData(userData.data);
    }
  }, []);

  if (typeof window !== "undefined") {
    if (!store.getState().isLogged) {
      window.location.href = "/";
    }
  }

  return (
    <main className={classes.body}>
      {store.getState().isLogged && [
        <Avatar key="avatar" className={classes.avatar} src={user.photoURL}>
          {user.email[0].toUpperCase()}
        </Avatar>,
        <Grid
          key="profile-content"
          className={classes.container}
          container
          direction="row"
        >
          <Grid item container justifyContent="center">
            <Typography className={classes.name} color="primary">
              {" "}
              {user.displayName ? user.displayName : user.email[0]}{" "}
            </Typography>
          </Grid>
          <Grid item container justifyContent="center">
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={handleChange}
              aria-label="navegação"
              variant="scrollable"
              scrollButtons="auto"
            >
              <Tab disableRipple label="Stats" />
              <Tab disableRipple label="Problemas" />
              <Tab disableRipple label="Submissões" />
              <Tab disableRipple label="Segurança" />
            </Tabs>
          </Grid>
          <Grid item container justifyContent="center">
            <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ProblemsList data={data} />
            </TabPanel>
            <TabPanel style={{ whidth: "100%" }} value={value} index={2}>
              <SubmissionsList data={data} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Security />
            </TabPanel>
          </Grid>
        </Grid>,
      ]}
    </main>
  );
}

function Exercises(props) {
  return (
    <React.Fragment>
      <AppBar title="Perfil" />
      <Body {...props} />
    </React.Fragment>
  );
}

export default Page(Exercises);
