import { withBaseContentPage } from "../../../components/Page";
import {
  makeStyles,
  MenuList,
  MenuItem,
  Divider,
  Collapse,
  Grid,
} from "@material-ui/core";
import { TextButton } from "../../../components/Styled";
import { CONTENT_BG, SECONDARY, PRIMARY } from "../../../public/colors";
import Classes from "../classes-menu.json";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    minHeight: "calc(100vh - 230px)",
    background: CONTENT_BG,
    fontSize: "16px",
  },
  menu: {
    minHeight: "calc(100vh - 230px)",
    height: "100%",
    borderRight: "1px solid #f1f1f1",
    backgroundColor: SECONDARY,
  },
  content: {
    padding: "15px",
  },
  contentFrame: {
    width: "100%",
    overflow: "auto",
    backgroundColor: "#FFFFFF",
    border: "none",
  },
  sectionMenuItem: {
    color: PRIMARY,
    fontWeight: "600",
  },
  menuItem: {
    color: PRIMARY,
    fontWeight: "450",
    padding: "3px",
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

  const router = useRouter();
  const goTo = (subitem) => () => {
    if (subitem) router.push(subitem.link);
  };

  return (
    <MenuList className={classes.menu} aria-labelledby="nested-list-subheader">
      {Object.keys(Classes).map((item, index) => [
        <MenuItem
          key={`menu-item-${index}`}
          style={{ overflowWrap: "break-word" }}
          className={classes.sectionMenuItem}
          onClick={toggleOnClick(item)}
          divider
        >
          {item}
        </MenuItem>,
        <Collapse in={open[item]} timeout="auto" unmountOnExit>
          <MenuList
            key={`menu-item-list-${index}`}
            style={{ paddingLeft: "25px" }}
          >
            {Classes[item].map((subitem, subindex) => (
              <MenuItem
                key={`menu-item-${index}-${subindex}`}
                className={classes.menuItem}
                onClick={goTo(subitem)}
              >
                {subitem.title}
              </MenuItem>
            ))}
          </MenuList>
          <Divider />
        </Collapse>,
      ])}
    </MenuList>
  );
}

function Content(props) {
  const { section, content } = props.data;
  const classes = styles();
  const ref = useRef();
  const [height, setHeight] = useState("0px");
  const [next, setNext] = useState();
  const [prev, setPrevious] = useState();

  const items = [];
  Object.keys(Classes).forEach((key) => {
    Classes[key].forEach((item) => {
      items.push(item);
    });
  });

  useEffect(() => {
    if (section && content) {
      const sectionNumber = parseInt(section.split("-")[1]);
      const contentNumber = parseInt(content);

      const nextItem = `/classes/section-${sectionNumber}/${contentNumber + 1}`;
      const nextSection = `/classes/section-${sectionNumber + 1}/1`;
      const prevItem = `/classes/section-${sectionNumber}/${contentNumber - 1}`;
      const prevSection = `/classes/section-${sectionNumber - 1}/1`;

      if (items.some((item) => item.link === nextItem)) {
        setNext(nextItem);
      } else if (items.some((item) => item.link === nextSection)) {
        setNext(nextSection);
      } else {
        setNext("");
      }

      if (items.some((item) => item.link === prevItem)) {
        setPrevious(prevItem);
      } else if (items.some((item) => item.link === prevSection)) {
        setPrevious(prevSection);
      } else {
        setPrevious("");
      }
    }
  });

  const router = useRouter();
  const goTo = (link) => () => {
    if (link) router.push(link);
  };

  const getText = (link) => {
    const item = items.filter((item) => item.link === link);
    return item ? item[0].title : "";
  };

  const Page = dynamic(() =>
    import(`../../../public/contents/${section}-${content}.js`)
  );

  return (
    <Grid container className={classes.content} direction="columnn">
      <Grid item xs={12}>
        <Page />
      </Grid>
      <Grid container item direction="row" justifyContent="space-between" style={{marginTop: "15px"}}>
        <Grid item>
          {prev && (
            <TextButton onClick={goTo(prev)}>{"< " + getText(prev)}</TextButton>
          )}
        </Grid>
        <Grid item>
          {next && (
            <TextButton onClick={goTo(next)}>{getText(next) + " >"}</TextButton>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

function Class(props) {
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
        <Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
          <Menu {...props} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9} xl={10}>
          <Content {...props} />
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

export async function getStaticPaths() {
  const sections = Object.keys(Classes);
  const paths = [];

  for (const section of sections) {
    for (const item of Classes[section]) {
      const route = item.link.split("/");
      paths.push({ params: { section: route[2], content: route[3] } });
    }
  }

  return {
    fallback: false,
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const section = context.params.section;
  const content = context.params.content;

  return {
    props: {
      data: { section, content },
    },
  };
}
