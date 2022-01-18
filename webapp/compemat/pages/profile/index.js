import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Page from "../../components/Page";
import AppBar from "../../components/AppBar";
import {
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Tabs,
  Tab,
  IconButton,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
import { VisibilityRounded } from "@material-ui/icons";
import {
  TabPanel,
  Input,
  ContainedButton,
  ErrorMessage,
  SuccessMessage,
  Title,
} from "../../components/Styled";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import PaginatedList from "../../components/PaginatedList";
import { GREY_2, PRIMARY_LIGHT, PRIMARY } from "../../public/colors";
import store from "../../redux/store";
import { getUserStats, updatePassword } from "../../seedwork/Requests";
import { translateStatus } from "../../seedwork/Translations";
import problems from "../../public/exercises/index.json";
import { encode } from "js-base64";

const styles = makeStyles((theme) => ({
  body: {
    maxWidth: "800px",
    width: "100%",
    minHeight: "calc(100vh - 180px)",
    margin: "auto",
    marginTop: "90px",
    backgroundColor: GREY_2,
    zIndex: 0,
    borderRadius: "15px",
  },
  avatar: {
    position: "relative",
    height: "120px",
    width: "120px",
    top: "-70px",
    left: "50%",
    fontSize: "30px",
    transform: "translateX(-50%)",
  },
  container: {
    padding: "15px",
    marginTop: "-85px",
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

function Stats(props) {
  const { data } = props;
  let trials = data.trials ? data.trials : [];
  
  const count = trials.reduce(
    (count, item) => {
      if (item.status === "solved") {
        return { tried: count.tried + 1, solved: count.solved + 1 };
      } else {
        return { tried: count.tried + 1, solved: count.solved };
      }
    },
    { tried: 0, solved: 0 }
  );

  const countCategories = trials.reduce(
    (count, item) => {
      if(count[item.problem_category]){
        count[item.problem_category].tentado++;
        if (item.status === "solved") {
          count[item.problem_category].resolvido++;
        }
      }
     
      return count;
    },
    {
      programming: { name:"Programação", tentado: 0, resolvido: 0 },
      arithmetic: { name:"Aritmética",tentado: 0, resolvido: 0 },
      combinatorics: { name:"Análise Combinátoria", tentado: 0, resolvido: 0 },
      financial: { name:"Matemática Financeira", tentado: 0, resolvido: 0 },
      functions: { name:"Funções", tentado: 0, resolvido: 0 },
      probability: { name:"Probabilidade", tentado: 0, resolvido: 0 },
      progression: { name:"Progressões", tentado: 0, resolvido: 0 },
      trigonometry: { name:"Trigonométria", tentado: 0, resolvido: 0 }
    }
  );

  const countCategoriesList = Object.keys(countCategories).map( (item, index) => countCategories[item]);

  return (
    <div style={{ width: "100%", maxWidth: "640px" }}>
      <Grid container direction="row">
   
        <Grid style={{ height: "350px" }} xs={12} sm={12} md={12}>
          <ResponsiveContainer width="100%" >
            <BarChart
              data={countCategoriesList}
              layout="vertical"
              margin={{ top: 25, right: 20, bottom: 0, left: 55 }}
            >
              <XAxis  type="number" />
              <YAxis type="category" dataKey="name" interval={0}/>
              <Tooltip />
              <Bar dataKey="resolvido" fill={PRIMARY_LIGHT} />
              <Bar dataKey="tentado" fill={PRIMARY} />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </Grid>
    </div>
  );
}

function ProblemsList(props) {
  const { data } = props;
  const router = useRouter();
  const goTo = (place) => () => {
    if (place) router.push(place);
  };

  const renderItem = (item, index) => {
    return [
      <ListItem key={`trial-${index}`}>
        <ListItemText
          primary={`${problems[item.problem_id].name}`}
          secondary={translateStatus(item.status)}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="ver"
            color="primary"
            onClick={goTo(`/exercises/${item.problem_id}`)}
          >
            <VisibilityRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
      <Divider key={`divider-${index}`} />,
    ];
  };

  return (
    <div style={{ width: "100%", maxWidth: "640px" }}>
      <PaginatedList
        data={data.trials}
        listItem={renderItem}
        listStyles={{ width: "100%" }}
      />
    </div>
  );
}

function SubmissionsList(props) {
  const { data } = props;
  const router = useRouter();
  const goTo = (place) => () => {
    if (place) router.push(place);
  };


  const getDescription = (item) => {
    const dateStr = new Date(item.time).toLocaleDateString();
    const timeStr = new Date(item.time).toLocaleTimeString();

    if (item.report.correctAnswer) {
      return `Resposta correta em ${dateStr} às ${timeStr}`;
    } else if (item.report.executionError) {
      return `Erro de execução em ${dateStr} às ${timeStr}`;
    } else {
      return `Resposta errada em ${dateStr} às ${timeStr}`;
    }
  };

  const renderItem = (item, index) => {
    return [
      <ListItem key={`trial-${index}`}>
        <ListItemText
          primary={`${problems[item.problem_id].name}`}
          secondary={getDescription(item)}
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="ver"
            color="primary"
            onClick={goTo(`/exercises/${item.problem_id}?c=${encode(item.code)}`)}
          >
            <VisibilityRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>,
      <Divider key={`divider-${index}`} />,
    ];
  };

  return (
    <div style={{ width: "100%", maxWidth: "640px" }}>
      <PaginatedList
        data={data.submissions.reverse()}
        listItem={renderItem}
        listStyles={{ width: "100%" }}
      />
    </div>
  );
}

function Security() {
  const [oldPassword, setOldPassword] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState(
    "Informe a sua senha."
  );

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
            <Grid item style={{ marginBottom: "10px" }}>
              <ContainedButton
                disabled={validationMessage}
                onClick={() =>
                  updateUserPassword(
                    password,
                    setSuccessMessage,
                    setErrorMessage
                  )
                }
              >
                Redefinir
              </ContainedButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function Body() {
  const classes = styles();
  const user = store.getState().user;
  const [value, setValue] = React.useState(0);
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
            <TabPanel style={{ width: "100%" }} value={value} index={0}>
              <Stats data={data} />
            </TabPanel>
            <TabPanel style={{ width: "100%" }} value={value} index={1}>
              <ProblemsList data={data} />
            </TabPanel>
            <TabPanel style={{ width: "100%" }} value={value} index={2}>
              <SubmissionsList data={data} />
            </TabPanel>
            <TabPanel style={{ width: "100%" }} value={value} index={3}>
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
