import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import { ChevronRightRounded, ChevronLeftRounded } from "@material-ui/icons/";
import dynamic from "next/dynamic";

const MathComponent = dynamic(
  import("mathjax-react").then((mod) => mod.MathComponent),
  {
    ssr: false,
  }
);

const styles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    width: "100%",
    height: "calc(100vh - 340px)",
    minHeight: "330px",
    minWidth: "290px",
    backgroundColor: "#FFFFFF",
    border: "none",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
  },
}));

function ProblemaFrame(props) {
  const { data } = props;
  const classes = styles();

  const fontSizeProp = { style: { fontSize: "18px" } };
  const fontEnhancedProp = { style: { fontSize: "18px", fontWeight: "600" } };
  const testCases = data.cases.slice(0, 2);

  const Page = dynamic(() => import(`../public/exercises/all/${data.id}.js`));

  return (
    <div className={classes.root}>
      <Page />
      <div>
        <h3>Exemplos</h3>
        <List dense>
          <Divider />
          {testCases.map((testCase, index) => {
            const listItems = [];

            for (const entry of Object.keys(testCase.input)) {
              listItems.push(
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightRounded />
                  </ListItemIcon>
                  <ListItemText
                    primaryTypographyProps={fontEnhancedProp}
                    secondaryTypographyProps={fontSizeProp}
                    primary={entry}
                    secondary={JSON.stringify(testCase.input[entry])}
                  />
                </ListItem>
              );
            }

            listItems.push(
              <ListItem>
                <ListItemIcon>
                  <ChevronLeftRounded />
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={fontEnhancedProp}
                  secondaryTypographyProps={fontSizeProp}
                  primary={"Saída"}
                  secondary={JSON.stringify(testCase.output)}
                />
              </ListItem>
            );
            listItems.push(<Divider />);

            return listItems;
          })}
        </List>
      </div>
    </div>
  );
}

export default ProblemaFrame;
