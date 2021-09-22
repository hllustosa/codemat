import { withBaseContentPage } from "../../components/Page";
import { makeStyles } from "@material-ui/core";
import { CONTENT_BG, PRIMARY } from "../../public/colors";

const styles = makeStyles((theme) => ({
  root: {
    maxWidth: "1000px",
    width: "100%",
    padding: "25px",
    minHeight: "calc(100vh - 230px)",
    background: CONTENT_BG,
    margin: "auto",
    fontSize: "16px",
  },
  blockQuote: {
    borderLeft: `7px solid ${PRIMARY}`,
    background: "#ebebeb",
    padding: "15px 10px",
    margin: "25px",
    fontStyle: "italic",
  },
}));

function Course() {
  const classes = styles();
  return (
    <main className={classes.root}>
      <p style={{ fontSize: "20px" }}> Parte II - Lidando com Erros no Código </p>
      <video
        style={{ margin: "auto", display: "block" }}
        src=""
        width="640px"
        height="480px"
      ></video>{" "}
      <p />

    </main>
  );
}

export default withBaseContentPage(
  Course,
  "Tutorial",
  "Aprenda a utilizar a página",
  "180px"
);
