import React from "react";
import { makeStyles } from "@material-ui/core";
import { CONTRAST_COLOR, PRIMARY, SECONDARY } from "../public/colors";
import dynamic from "next/dynamic";

const MathComponent = dynamic(
  import("mathjax-react").then((mod) => mod.MathComponent),
  {
    ssr: false,
  }
);

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
    width: "320px",
    backgroundColor: CONTRAST_COLOR,
    borderRadius: "5px",
  },
  equation: {
    color: PRIMARY,
    textAlign: "center",
  },
}));

export function ClassSectionTitle(props) {
  const classes = styles();
  return (
    <div className={classes.sectionTitle}>
      <div width="100%">{props.title}</div>
      <div width="100%">
        <hr style={{ height: `1px`, color: PRIMARY, backgroundColor: PRIMARY, marginTop: "2px" }} />
      </div>
    </div>
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
          display={props.block}
        />
      )}
    </div>
  );
}

export function ClassImage(props) {
  const style =
    props.pos == "center"
      ? { textAlign: "center" }
      : { float: props.pos, margin: "10px" };
  return (
    <div style={style}>
      <img {...props} />
      <div style={{ textAlign: "center", fontSize: "12px" }}>
        {props.legend}
      </div>
    </div>
  );
}

export function ClassLink(props) {
  return (
    <a target="_blank" style={{ backgroundColor: "#e4e7f1ff"}} {...props}>
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

export function ClassFlowchart(props) {
  const classes = styles();

  const opt = {
    x: 0,
    y: 0,
    "line-width": 3,
    "line-length": 50,
    "text-margin": 10,
    "font-size": 14,
    "font-color": "black",
    "line-color": "black",
    "element-color": "black",
    fill: "white",
    "yes-text": "yes",
    "no-text": "no",
    "arrow-end": "block",
    scale: 1,
    symbols: {
      start: {
        "font-color": "red",
        "element-color": "green",
        "font-weight": "bold",
      },
      end: {
        "font-color": "red",
        "element-color": "green",
        "font-weight": "bold",
      },
    },
    flowstate: {
      department1: { fill: "pink" },
      department2: { fill: "yellow" },
      external: { fill: "green" },
    },
  };

  return (
    <Flowchart
      chartCode={`st->op1->cond
      cond(yes)->io->e
      cond(no)->para
      para(path1, bottom)->sub1(right)->op1
      para(path2, top)->op1`}
      //options={opt}
    />
  );
}
