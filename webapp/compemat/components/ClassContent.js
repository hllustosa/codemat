import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { CONTRAST_COLOR, PRIMARY, CONSTRAST_LIGHT } from "../public/colors";
import dynamic from "next/dynamic";

const MathComponent = dynamic(
  import("mathjax-react").then((mod) => mod.MathComponent),
  {
    ssr: false,
  }
);

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: "12px",
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const styles = makeStyles((theme) => ({
  root: {
    width: "100%",
    fontSize: "calc(14px + (21 - 16) * ((100vw - 300px) / (1600 - 300)))",
    padding: "5px",
  },
  sectionTitle: {
    marginTop: "25px",
    marginBottom: "25px",
    fontSize: "calc(17px + (25 - 14) * ((100vw - 300px) / (1600 - 300)))",
    color: PRIMARY,
  },
  sectionBox: {
    position: "relative",
    marginTop: "10px",
    marginBottom: "5px",
    fontSize: "calc(13px + (25 - 18) * ((100vw - 300px) / (1600 - 300)))",
    fontWeight: "450",
    color: PRIMARY,
    padding: "15px",
    width: "250px",
    backgroundColor: CONTRAST_COLOR,
    borderRadius: "5px",
  },
  equation: {
    color: PRIMARY,
    textAlign: "center",
    maxWidth: "95%",
    overflowX: "auto",
    margin: "15px"
  },
  image: {
    marginTop: "25px",
    marginBottom: "25px",
  },
  link: {
    backgroundColor: CONSTRAST_LIGHT,
  },
  tooltipText: {
    backgroundColor: CONSTRAST_LIGHT,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

export function ClassSectionTitle(props) {
  const classes = styles();
  return (
    <div className={classes.sectionTitle}>
      <div width="100%">{props.title}</div>
      <div width="100%">
        <hr
          style={{
            height: `1px`,
            color: PRIMARY,
            backgroundColor: PRIMARY,
            marginTop: "2px",
          }}
        />
      </div>
    </div>
  );
}

export function ClassToolTip(props) {
  const classes = styles();
  const { title, text, image, link } = props.content;
  return (
    <HtmlTooltip
      title={
        <React.Fragment>
            <div>
              <Typography color="inherit">{title}</Typography>
              <img
                src={image}
                style={{ float: "right", marginLeft: "5px", width: "100px" }}
              ></img>
              {text}
            </div>
        </React.Fragment>
      }
    >
      <a target="_blank" rel="noopener" href={link} className={classes.tooltipText}>{props.children}</a>
    </HtmlTooltip>
  );
}

export function ClassBox(props) {
  const classes = styles();
  const { float } = props;
  return (
    <div
      className={classes.sectionBox}
      style={{
        float: float,
        margin: float === "right" ? "20px 0px 10px 15px" : "20px 25px 10px 0px",
      }}
    >
      {props.content}
      <div
        style={{
          position: "absolute",
          top: "-35px",
          right: "-15px",
          fontFamily: "serif",
          fontSize: "75px",
        }}
      >
        ❞
      </div>
    </div>
  );
}

export function ClassEquation(props) {
  const classes = styles();
  return (
    <div className={classes.equation}>
      {process.browser && (
        <MathComponent
          tex={String.raw`${props.equation}`}
          display={props.block ? true : false}
          
        />
      )}
    </div>
  );
}

export function ClassImage(props) {
  const classes = styles();
  const style =
    props.pos == "center"
      ? { textAlign: "center" }
      : { float: props.pos, margin: "10px" };
  return (
    <div className={classes.image} style={style}>
      <img {...props} />
      <div style={{ textAlign: "center", fontSize: "12px" }}>
        {props.legend}
      </div>
    </div>
  );
}

export function ClassLink(props) {
  const classes = styles();
  return (
    <a  target="_blank" rel="noopener" className={classes.link} {...props}>
      {props.children}
    </a>
  );
}

export function Eq(props) {
  return (
    process.browser && (
      <MathComponent
        tex={String.raw`${props.s}`}
        display={props.block ? true : false}
      />
    )
  );
}

export function ClassContainer(props) {
  const classes = styles();
  return <article className={classes.root}>{props.children}</article>;
}
