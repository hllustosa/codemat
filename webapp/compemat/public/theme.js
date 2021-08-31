import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#313B61",
      light: "#5F6888",
      dark: "#ffb200",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f9f9f9",
      light: "#ffffff",
      dark: "#e6e6e6",
      contrastText: "#004a74",
    },
    terciary: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#ffffff",
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
});

theme = responsiveFontSizes(theme);

export default theme;
