import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  DialogTitle,
  Dialog,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import {
  DoneAllRounded, //correct answser
  HighlightOffRounded, //wrong answer
  ErrorOutlineRounded, // error
  ChevronRightRounded,
  ChevronLeftRounded,
  PlaylistAddCheckRounded,
} from "@material-ui/icons/";

const useStyles = makeStyles({
  root: {
    maxWidth: "550px",
    width: "100%",
    padding: "25px",
    fontWeight: "400",
  },
});

const StyledAccordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(Accordion);

const StyledAccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(AccordionSummary);

const StyledAccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(AccordionDetails);

const ResultIcon = (props) => {
  const { hasError, answer } = props;

  if (hasError) {
    return <ErrorOutlineRounded />;
  } else if (answer) {
    return <DoneAllRounded />;
  } else {
    return <HighlightOffRounded />;
  }
};

const TitleText = (hasError, answer, index) => {
  if (hasError) {
    return `Erro ocorrido na execução #${index + 1}`;
  } else if (answer) {
    return `Resposta correta na execução #${index + 1}`;
  } else {
    return `Resposta incorreta na execução #${index + 1}`;
  }
};

export default function ResultDialog(props) {
  const classes = useStyles();
  const { onClose, open, results } = props;

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="titulo-dialogo-resultado"
      open={open}
    >
      <DialogTitle id="result-dialog">Resultado da Execução</DialogTitle>
      <Divider />
      {results.map((item, index) => (
        <StyledAccordion
          id={`panel-${index}`}
          square
          expanded={expanded === `panel-${index}`}
          onChange={handleChange(`panel-${index}`)}
        >
          <StyledAccordionSummary
            aria-controls="panel-content"
            id="panel-header"
          >
            <ResultIcon hasError={item.hasError} answer={item.answer} /> &nbsp;
            <Typography>
              {" "}
              {TitleText(item.hasError, item.answer, index)}
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            <List style={{ width: "100%" }}>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightRounded />
                </ListItemIcon>
                <ListItemText
                  primary={"Entrada"}
                  secondary={JSON.stringify(item.input)}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <PlaylistAddCheckRounded />
                </ListItemIcon>
                <ListItemText
                  primary={"Saída Esperada"}
                  secondary={JSON.stringify(item.expected)}
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  <ChevronLeftRounded />
                </ListItemIcon>
                <ListItemText
                  primary={"Saída do Programa"}
                  secondary={
                    item.outputs ? JSON.stringify(item.outputs) : "Vazia"
                  }
                />
              </ListItem>
              {item.hasError && (
                <React.Fragment>
                  <Divider />
                  <ListItem>
                    <ListItemIcon>
                      <ErrorOutlineRounded />
                    </ListItemIcon>
                    <ListItemText
                      primary={"Erro"}
                      secondary={item.lastError.split("<br/>")[0]}
                    />
                  </ListItem>
                </React.Fragment>
              )}
            </List>
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </Dialog>
  );
}
