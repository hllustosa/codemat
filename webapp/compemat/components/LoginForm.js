import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Input,
  Title,
  ContainedButton,
  TextButton,
} from "../components/Styled";

import {
  Dialog,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import { auth } from "../firebase/clientApp";
import firebase from "../firebase/clientApp";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword
} from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useRouter } from "next/router";

import store from "../redux/store";
import { getLogin } from "../redux/actions";

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

function Login(user) {
  store.dispatch(getLogin(user));
  window.location.reload();
}

function LoginWithEmail(email, password) {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      alert(error)
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

function LoginWithGoogle() {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      const user = result.user;
      Login(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

function LoginWithFacebook() {
  const auth = getAuth(firebase);
  auth.languageCode = "pt-BR";

  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = FacebookAuthProvider.credentialFromResult(result);
      //const token = credential.accessToken;
      const user = result.user;
      Login(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
}

function SignInForm() {}

function LoginForm(props) {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      className={classes.base}
    >
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
            <Input value={email} onChange={e => setEmail(e.target.value)} label="Email" />{" "}
          </Grid>
          <Grid item style={{ marginBottom: "10px" }}>
            <Input value={password} onChange={e => setPassword(e.target.value)} label="Senha" />{" "}
          </Grid>

          <Grid item style={{ marginBottom: "10px" }}>
            <ContainedButton onClick={() => LoginWithEmail(email, password)}>Login</ContainedButton>
          </Grid>
          <Grid container item direction="row" justifyContent="space-between">
            <Grid item style={{ marginBottom: "10px" }}>
              <TextButton>Cadastrar</TextButton>
            </Grid>
            <Grid item style={{ marginBottom: "10px" }}>
              <TextButton>Recuperar Senha</TextButton>
            </Grid>
          </Grid>
        </Grid>

        <Grid container item direction="column">
          <Grid item>
            <GoogleLoginButton onClick={LoginWithGoogle}>
              <span>Login Google</span>
            </GoogleLoginButton>
          </Grid>
          <Grid item>
            <FacebookLoginButton onClick={LoginWithFacebook}>
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
  const { onClose, open, content } = props;

  const handleClose = () => {
    onClose();
  };

  const createUser = (email, password) => {
    /*
    
    */
    /*createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert(JSON.stringify(userCredential));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });*/
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="login-dialogo" open={open}>
      <div className={classes.root}>
        <LoginForm />
      </div>
    </Dialog>
  );
}
