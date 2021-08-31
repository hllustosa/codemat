import theme from "../public/theme";
import { ThemeProvider } from "@material-ui/styles";

const withBasePage = (Component) => {
  
  const BasePage = (props) => {
    return (
      <ThemeProvider theme={theme}>
        <Component {...props} />
      </ThemeProvider>
    );
  };

  return BasePage;
};

export default withBasePage;
