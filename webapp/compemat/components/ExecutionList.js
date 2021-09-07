import { Fragment } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import {
  DoneAllRounded, //correct answser
  HighlightOffRounded, //wrong answser
  InfoRounded, //output
  BugReportRounded, //debug
  ErrorOutlineRounded, // errpr
} from "@material-ui/icons/";

const createCorrectAnswerItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem>
      <ListItemText primary={content} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createWrongAnswerItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem>
      <ListItemText primary={content} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createOutputAnswerItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem>
      <ListItemText primary={content} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createDebugItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem>
      <ListItemText primary={content} />
    </ListItem>
    <Divider />
  </Fragment>
);

const createErrorItem = (content, index) => (
  <Fragment key={`log-item-${index}`}>
    <ListItem>
      <ListItemText primary={content} />
    </ListItem>
    <Divider />
  </Fragment>
);

export default function ExecutioList(props) {
  const { items } = props;

  const creators = {
    correct: createCorrectAnswerItem,
    output: createWrongAnswerItem,
    debug: createOutputAnswerItem,
    wrong: createDebugItem,
    error: createErrorItem,
  };

  return (
    <List>
      {items.map((item, index) => creators[item.type](item.content, index))}
    </List>
  );
}
