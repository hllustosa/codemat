import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ptBR } from '@material-ui/data-grid';

let theme = createTheme({
  palette: {
    primary: {
      main: "#313B61",
      light: "#5F6888",
      dark: "#313B61",
      contrastText: "#F5F3F5",
    },
    secondary: {
      main: "#FFC15E",
      light: "#FFC15E",
      dark: "#FFC15E",
      contrastText: "#313B61",
    },
    terciary: {
      main: "#FFC15E",
      light: "#FFC15E",
      dark: "#FFC15E",
    },
    info: {
      main: "#708090",
      bar: "696969",
      light: "D3D3D3",
    },
    error: {
      main: '#FF1744',
    },
    background: {
      default: "#f5f5f5",
    },
  },
  navbar: {
    height: "37px",
    padding: "5px 15px 5px 25px",
    logoHeight: "35px",
  },
  drawer: {
    opacity: "0.95",
    width: "250px",
    logoHeight: "60px",
  },
  footer: {
    background: "linear-gradient(to bottom, #ffba1a, #ffba1a)",
    logoHeight: "30px",
    lineHeight: "1.5em",
  },
  transitionTimeout: 1300,
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: "1em",
      },
    },
  },
}, ptBR);

theme = responsiveFontSizes(theme);

export default theme;
