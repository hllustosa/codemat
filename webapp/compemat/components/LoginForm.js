import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Input,
  ContainedButton,
  TextButton,
  ErrorMessage,
  SuccessMessage,
} from "../components/Styled";

import { Dialog, Grid, Typography } from "@material-ui/core";
import firebase from "../firebase/clientApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
} from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

import store from "../redux/store";
import { getLogin } from "../redux/actions";
import URL from "../public/host";

const useStyles = makeStyles({
  root: {
    width: "300px",
    height: "420px",
  },
  base: {
    maxWidth: "100%",
    padding: "10px",
    height: "420px",
  },
});

import { getRefreshToken, Request } from "../seedwork/Requests";

async function login(user) {
  console.log(JSON.stringify(user));
  store.dispatch(getLogin(user));
  window.location.reload();
}

function handleLoginError(error, setErrorMessage) {
  const errorMessage = error.message;

  if (!errorMessage || errorMessage.includes("network-request-failed")) {
    setErrorMessage("Problema de conexão");
  } else {
    setErrorMessage("Usuário ou senha inválidos");
  }
}

function handleSignInError(error, setErrorMessage) {
  const errorMessage = error.message;

  if (!errorMessage || errorMessage.includes("email-already-in-use")) {
    setErrorMessage("Email já cadastrado");
  } else if (!errorMessage || errorMessage.includes("invalid-email")) {
    setErrorMessage("Email inválido");
  } else {
    setErrorMessage("Não foi possível registrar um novo usuário");
  }
}

function LoginWithEmail(email, password, setErrorMessage) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      if (userCredential.user.emailVerified) {
        login(userCredential.user);
      } else {
        setErrorMessage(
          "Email não confirmado. Verifique seu email para fazer o login."
        );
      }
    })
    .catch((error) => {
      handleLoginError(error, setErrorMessage);
    });
}

function LoginWithGoogle(setErrorMessage) {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      login(result.user);
    })
    .catch((error) => {
      handleLoginError(error, setErrorMessage);
    });
}

function LoginWithFacebook(setErrorMessage) {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      login(result.user);
    })
    .catch((error) => {
      handleLoginError(error, setErrorMessage);
    });
}

function SignInForm() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");
  const [validationMessage, setValidationMessage] = React.useState("");

  const classes = useStyles();

  useEffect(() => {
    if (!email) {
      setValidationMessage("Email é obrigatório.");
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
  }, [email, password, passwordCheck]);

  const createUser = (email, password, setSuccessMessage, setErrorMessage) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user;
      })
      .then((user) => {
        sendEmailVerification(user, {
          url: URL,
          handleCodeInApp: false,
        });
      })
      .then(() => {
        setSuccessMessage(
          "Usuário registrado com sucesso. Verifique seu email!"
        );
      })
      .catch((error) => {
        handleSignInError(error, setErrorMessage);
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
        justifyContent="space-between"
      >
        <Grid
          container
          item
          direction="column"
          justifyContent="space-between"
          style={{ height: "100%" }}
        >
          <Grid container item direction="column">
            <Grid item style={{ marginBottom: "10px" }}>
              <Typography style={{ textAlign: "center" }}>Registrar</Typography>
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                type="email"
              />
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Senha"
                type="password"
              />
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Input
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
                label="Confirmar Senha"
                type="password"
              />
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <Typography size={12}>{validationMessage}</Typography>
            </Grid>
          </Grid>

          <Grid item style={{ marginBottom: "10px" }}>
            <ContainedButton
              disabled={validationMessage}
              onClick={() =>
                createUser(email, password, setSuccessMessage, setErrorMessage)
              }
            >
              Registrar
            </ContainedButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function LoginForm(props) {
  const { setShowSignIn } = props;
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [successMessage, setSuccessMessage] = React.useState("");

  const sendResetPasswordMail = (email, setSuccessMessage, setErrorMessage) => {
    const auth = getAuth();

    sendPasswordResetEmail(auth, email, {
      url: URL,
      handleCodeInApp: false,
    })
      .then(() => {
        setSuccessMessage("Email de redefinição de senha enviado.");
      })
      .catch((error) => {
        setErrorMessage(
          error//"Não foi possível enviar email para redefinição de senha"
        );
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
        justifyContent="space-between"
      >
        <Grid container item direction="column">
          <Grid item style={{ marginBottom: "10px" }}>
            <Typography style={{ textAlign: "center" }}>Entrar</Typography>
          </Grid>
          <Grid item style={{ marginBottom: "10px" }}>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
            />{" "}
          </Grid>
          <Grid item style={{ marginBottom: "10px" }}>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Senha"
              type="password"
            />{" "}
          </Grid>
          <Grid item style={{ marginBottom: "10px" }}>
            <ContainedButton
              disabled={!(email && password)}
              onClick={() => LoginWithEmail(email, password, setErrorMessage)}
            >
              Login
            </ContainedButton>
          </Grid>
          <Grid container item direction="row" justifyContent="space-between">
            <Grid item style={{ marginBottom: "10px" }}>
              <TextButton onClick={() => setShowSignIn(true)}>
                Cadastrar
              </TextButton>
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <TextButton
                disabled={!email}
                onClick={() =>
                  sendResetPasswordMail(
                    email,
                    setSuccessMessage,
                    setErrorMessage
                  )
                }
              >
                Recuperar Senha
              </TextButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item direction="column">
          <Grid item>
            <GoogleLoginButton onClick={() => LoginWithGoogle(setErrorMessage)}>
              <span>Login Google</span>
            </GoogleLoginButton>
          </Grid>
          <Grid item>
            <FacebookLoginButton
              onClick={() => LoginWithFacebook(setErrorMessage)}
            >
              <span>Login Facebook</span>
            </FacebookLoginButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function SignInSignOnForm(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [showSignIn, setShowSignIn] = React.useState(false);

  const handleClose = () => {
    onClose();
    setShowSignIn(false);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="login-dialogo" open={open}>
      <div className={classes.root}>
        {!showSignIn && <LoginForm setShowSignIn={setShowSignIn} />}
        {showSignIn && <SignInForm />}
      </div>
    </Dialog>
  );
}
