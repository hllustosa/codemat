import { withBaseContentPage } from "../../components/Page";
import { makeStyles, MenuList, MenuItem, Divider, Collapse, Grid } from "@material-ui/core";
import { CONTENT_BG, PRIMARY } from "../../public/colors";
import Classes from "./classes-menu.json";
import { useState } from "react";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "calc(100vh - 230px)",
    background: CONTENT_BG,
    fontSize: "16px",
  },
  menu: {
    // width: "100%",
    minHeight: "calc(100vh - 230px)",
    borderRight: "1px solid #f1f1f1",
  },
  blockQuote: {
    borderLeft: `7px solid ${PRIMARY}`,
    background: "#ebebeb",
    padding: "15px 10px",
    margin: "25px",
    fontStyle: "italic",
  },
}));

function Menu() {
  const classes = styles();
  const [open, setOpen] = useState({});

  const toggleOnClick = (item) => () => {
    const openMenu = { ...open };
    openMenu[item] = openMenu[item] ? false : true;
    setOpen(openMenu);
  };

  return (
    <MenuList className={classes.menu} aria-labelledby="nested-list-subheader">
      {Object.keys(Classes).map((item, index) => [
        <MenuItem
          key={`menu-item-${index}`}
          style={{overflowWrap: "break-word"}}
          divider
          onClick={toggleOnClick(item)}
        >
          {item}
        </MenuItem>,
        <Collapse in={open[item]} timeout="auto" unmountOnExit>
          {Classes[item].map((subitem, subindex) => (
            <MenuList
              key={`menu-item-${index}-${subindex}`}
              style={{ paddingLeft: "25px" }}
              dense
            >
              <MenuItem>{subitem.title}</MenuItem>
            </MenuList>
          ))}
          <Divider/>
        </Collapse>,
      ])}
    </MenuList>
  );
}

function Content(props) {
  return <div> Conteúdo TOP </div>;
}

function Class() {
  const classes = styles();
  return (
    <main className={classes.root}>
      <Grid
        container
        className={classes.root}
        direction="row"
        justifyContent="flex-start"
        wrap="wrap-reverse"

      >
        <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
          <Menu />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} xl={9}>
          <Content />
        </Grid>
      </Grid>
    </main>
  );
}

export default withBaseContentPage(
  Class,
  "Aulas",
  "Conteúdo do Curso",
  "180px"
);
