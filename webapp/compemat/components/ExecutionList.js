import React, { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import {
  DoneAllRounded, //correct answser
  HighlightOffRounded, //wrong answser
  InfoRounded, //output
  BugReportRounded, //debug
  ErrorOutlineRounded, // error
  VisibilityRounded,
} from "@material-ui/icons/";
import ErrorDialog from "../components/ErrorDialogs";

const createCorrectAnswerItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem style={{ color: "#15906e" }}>
      <ListItemIcon style={{ color: "#15906e" }}>
        <DoneAllRounded />
      </ListItemIcon>
      <ListItemText primary={JSON.stringify(content)} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createWrongAnswerItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem style={{ color: "#cd1e41" }}>
      <ListItemIcon style={{ color: "#cd1e41" }}>
        <HighlightOffRounded />
      </ListItemIcon>
      <ListItemText primary={JSON.stringify(content)} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createOutputAnswerItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem style={{ color: "#5a6175" }}>
      <ListItemIcon style={{ color: "#5a6175" }}>
        <InfoRounded />
      </ListItemIcon>
      <ListItemText primary={JSON.stringify(content)} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createDebugItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem style={{ color: "#5e2750" }}>
      <ListItemIcon style={{ color: "#5e2750" }}>
        <BugReportRounded />
      </ListItemIcon>
      <ListItemText primary={JSON.stringify(content)} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createErrorItem = (content, index, handleClickOpen) => {
  return (
    <Fragment key={`log-item-${index}`}>
      <ListItem style={{ color: "#cd1e41" }}>
        <ListItemIcon style={{ color: "#cd1e41" }}>
          <ErrorOutlineRounded />
        </ListItemIcon>
        <ListItemText primary={content.split("<br/>")[0]} />
        <ListItemSecondaryAction>
          <IconButton
            style={{ color: "#cd1e41" }}
            edge="end"
            aria-label="visualizar"
            onClick={handleClickOpen(content)}
          >
            <VisibilityRounded />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

export default function ExecutionList(props) {
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = React.useState("");
  const { items } = props;

  const handleClickOpen = (error) => () => {
    setContent(error);
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  const creators = {
    correct: createCorrectAnswerItem,
    output: createOutputAnswerItem,
    debug: createDebugItem,
    wrong: createWrongAnswerItem,
    error: createErrorItem,
  };

  return (
    <List dense style={{width:"100%"}}>
      {items.map((item, index) =>
        creators[item.type](item.content, index, handleClickOpen)
      )}
      <ErrorDialog open={open} onClose={handleClose} content={content} />
    </List>
  );
}
