import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const styles = makeStyles((theme) => ({
  root: {
    padding: "15px",
    width: "100%",
    height: "calc(100vh - 310px)",
    minHeight: "330px",
    minWidth: "290px",
    backgroundColor: "#FFFFFF",
    border: "none",
    fontSize: "21px",
    letterSpacing: "-0.003em",
    lineHeight: "32px",
    fontFamily: "charter, Georgia, Cambria,",
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

  return (
    <div className={classes.root}>
      <div dangerouslySetInnerHTML={{ __html: data.problem }}></div>
      <div>
        <h3>Exemplos</h3>
        <List dense>
          <Divider />
          {testCases.map((testCase, index) => {
            const listItems = [];

            for (const entry of Object.keys(testCase.input)) {
              listItems.push(
                <ListItem>
                  <ListItemText
                    primaryTypographyProps={fontSizeProp}
                    secondaryTypographyProps={fontSizeProp}
                    primary={entry}
                    secondary={JSON.stringify(testCase.input[entry])}
                  />
                </ListItem>
              );
            }

            listItems.push(
              <ListItem>
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
