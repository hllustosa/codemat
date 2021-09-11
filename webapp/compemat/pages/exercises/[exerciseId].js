import Page from "../../components/Page";
import AppBar from "../../components/AppBar";
import React, { useEffect } from "react";

import { Grid, makeStyles } from "@material-ui/core";
import {
  PlayArrowRounded,
  AssessmentRounded,
  ChevronRightRounded,
  ChevronLeftRounded,
  StopRounded,
  ClearAllRounded,
} from "@material-ui/icons/";
import {
  Title,
  BaseIconButton,
  OutlinedButton,
  BaseChip,
  NoWrap,
  NoWrapContainer,
  NoWrapHtmlContainer,
  Progress,
} from "../../components/Styled";
import ExecutionList from "../../components/ExecutionList";
import CodeRunnerManager from "../../runner/CoreRunnerManager";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import dynamic from "next/dynamic";
const TextEditor = dynamic(import("../../components/CodeEditor"), {
  ssr: false,
});

const styles = makeStyles((theme) => ({
  root: {
    maxHeight: "calc(100vh - 48px)",
  },
  problemPane: {
    marginTop: "1px",
    overflow: "auto",
    "-webkit-transition": "width 1s",
    "-moz-transition": "width 1s",
    "-o-transition": "width 1s",
    "-ms-transition": "width 1s",
    transition: "width 1s",
    height: "calc(100vh - 52px)",
    maxHeight: "calc(100vh - 52px)",
    minHeight: "550px"
  },
  codePane: {
    marginTop: "1px",
    overflow: "auto",
    "-webkit-transition": "width 1s",
    "-moz-transition": "width 1s",
    "-o-transition": "width 1s",
    "-ms-transition": "width 1s",
    transition: "width 1s",
    height: "calc(100vh - 52px)",
    maxHeight: "calc(100vh - 52px)",
    minHeight: "550px"
  },
  problemContent: {
    padding: "15px",
    margin: "auto",
    maxWidth: "1000px",
    width: "calc(100% - 30px)",
  },
  problemMark: {
    padding: "10px",
    margin: "auto",
    maxWidth: "1000px",
    width: "calc(100% - 20px)",
  },
  markText: {
    fontWeight: "600",
  },
  executionTitle: {
    paddingTop: "10px",
  },
  executionList: {
    backgroundColor: "#F9F9F9",
    margin: "10px",
    width: "calc(100% - 20px)",
    flex: 1,
    overflowY: "auto",
  },
}));

function ProblemPane(props) {
  const classes = styles();
  const { problemSize, handleClick, data } = props;

  return (
    <Grid item className={classes.problemPane} style={{ width: problemSize }}>
      <Grid container justifyContent="space-between" wrap="nowrap">
        <Grid item>
          <Title></Title>
        </Grid>
        <Grid item>
          <Grid item>
            <Title size={22}>Problema</Title>
          </Grid>
        </Grid>
        <Grid item>
          <BaseIconButton onClick={handleClick}>
            <ChevronLeftRounded />
          </BaseIconButton>
        </Grid>
      </Grid>
      <Grid container direction="columnn" xs={12}>
        <Grid item xs={12}>
          <NoWrap className={classes.problemContent}>
            <NoWrapContainer>
              <span className={classes.markText}>{"Categoria: "} </span>{" "}
              <BaseChip label={data.category} />
            </NoWrapContainer>
          </NoWrap>
        </Grid>

        <Grid item xs={12}>
          <NoWrap className={classes.problemContent}>
            <NoWrapHtmlContainer
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </NoWrap>
        </Grid>
        <Grid item xs={12}>
          <NoWrap className={classes.problemContent}>
            <NoWrapContainer>
              <span className={classes.markText}>{"Tags: "} </span>{" "}
              {data.labels.map((label, index) => (
                <BaseChip key={`label-${index}`} label={label} />
              ))}
            </NoWrapContainer>
          </NoWrap>
        </Grid>
        <Grid item xs={12} className={classes.problemContent}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              <OutlinedButton href={`/exercises/${data.previous}`}>
                Anterior
              </OutlinedButton>
            </Grid>
            <Grid item>
              <OutlinedButton href={`/exercises/${data.next}`}>
                Próximo
              </OutlinedButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

function CodePane(props) {
  const classes = styles();
  const { codeSize, handleClick } = props;
  const executionLogRef = React.useRef(null);
  const [code, setCode] = React.useState("");
  const [running, setRunning] = React.useState(false);
  const [runner, setRunner] = React.useState({});
  const [entries, setEntries] = React.useState([]);
  const padding = { paddingRight: "10px", paddingLeft: "10px" };

  const handleTestExecutionFinished = (state) => {
    setRunning(false);
    console.log(JSON.stringify(state));
    state = state[0];

    if (state.hasError) {
      entries.push({ content: state.lastError, type: "error" });
    } else {
      if (!state.answer) {
        entries.push({
          content: `Resposta errada, esperada ${JSON.stringify(
            state.expectedOutput
          )}`,
          type: "wrong",
        });
      } else {
        entries.push({ content: `Resposta correta`, type: "correct" });
      }
    }

    setEntries([...entries]);
  };

  const handleNewOutput = (output) => {
    entries.push({ content: output, type: "output" });
    setEntries([...entries]);
  };

  const handleNewDebug = (debug) => {
    entries.push({ content: debug, type: "debug" });
    setEntries([...entries]);
  };

  const handleTestClick = () => {
    if (running) {
      if (runner) {
        runner.interrupt();
        setRunning(false);
      }
    } else {
      const runnerInstance = new CodeRunnerManager(
        props.data,
        code,
        handleTestExecutionFinished,
        handleNewOutput,
        handleNewDebug
      );

      setRunner(runnerInstance);
      setRunning(true);
      runnerInstance.runTest();
    }
  };

  useEffect(() => {
    executionLogRef.current.scrollTop = executionLogRef.current.scrollHeight;
  }, [entries]);

  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      className={classes.codePane}
      style={{ width: codeSize }}
    >
      <Grid
        container
        style={{ paddingRight: "10px" }}
        item
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item>
          <BaseIconButton onClick={handleClick}>
            <ChevronRightRounded />
          </BaseIconButton>
        </Grid>
        <Grid item>
          <Title size={22}>Solução {running && <Progress />} </Title>
        </Grid>
        <Grid item>
          {!running && (
            <NoWrap>
              <BaseIconButton onClick={handleTestClick}>
                <PlayArrowRounded />
              </BaseIconButton>
              <BaseIconButton>
                <AssessmentRounded />
              </BaseIconButton>
            </NoWrap>
          )}

          {running && (
            <NoWrap>
              <BaseIconButton onClick={handleTestClick}>
                <StopRounded />
              </BaseIconButton>
            </NoWrap>
          )}
        </Grid>
      </Grid>
      <Grid container item style={padding}>
        <TextEditor code={code} setCode={setCode} readOnly={running} />
      </Grid>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
        item
        style={padding}
        className={classes.executionTitle}
      >
        <Grid>
          <Title size={14}>Execução</Title>
        </Grid>
        <Grid>
          <BaseIconButton onClick={() => setEntries([])}>
            <ClearAllRounded />
          </BaseIconButton>
        </Grid>
      </Grid>
      <Grid
        container
        item
        ref={executionLogRef}
        style={padding}
        className={classes.executionList}
      >
        <ExecutionList items={entries} />
      </Grid>
    </Grid>
  );
}

function Body(props) {
  const classes = styles();
  const [showCode, setShowCode] = React.useState(true);
  const [showProblem, setShowProblem] = React.useState(true);
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const showBoth = showProblem && showCode;

  props.setTitle(props.data.name);

  const problemSize = showProblem
    ? showBoth && !isSmallScreen
      ? "50%"
      : "100%"
    : "0px";

  const codeSize = showCode
    ? showBoth && !isSmallScreen
      ? "50%"
      : showProblem
      ? "0px"
      : "100%"
    : "0px";

  const ProblemPaneClick = () => {
    if (showBoth) {
      setShowProblem(false);
    } else {
      setShowCode(true);
    }
  };

  const CodePaneClick = () => {
    if (showBoth) {
      setShowCode(false);
    } else {
      setShowProblem(true);
    }
  };

  return (
    <main className={classes.root}>
      <Grid className={classes.root} container direction="row" spacing={0}>
        <ProblemPane
          data={props.data}
          problemSize={problemSize}
          handleClick={ProblemPaneClick}
        />
        <CodePane
          data={props.data}
          codeSize={codeSize}
          handleClick={CodePaneClick}
        />
      </Grid>
    </main>
  );
}

function Exercise(props) {
  return (
    <React.Fragment>
      <AppBar title={props.data.name} />
      <Body {...props} />
    </React.Fragment>
  );
}

export default Page(Exercise);

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          exerciseId: "ex_Frf432D34ss",
        },
      },
      {
        params: {
          exerciseId: "ex_D4fd34D234d",
        },
      },
      {
        params: {
          exerciseId: "ex_G3Fer3rDS432",
        },
      },
      {
        params: {
          exerciseId: "ex_Plo43jjrR3",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const exerciseId = context.params.exerciseId;
  return {
    props: {
      data: {
        id: exerciseId,
        name: "Exercício de Teste",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        </p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ligula mi, feugiat sed euismod vel, varius sit amet justo. Duis malesuada mauris non condimentum blandit. In condimentum sit amet enim iaculis rhoncus. Donec volutpat non orci eu varius. Sed condimentum ex eu ipsum tincidunt, porta efficitur dui pulvinar. In metus neque, commodo sed congue in, suscipit ut orci. Nulla facilisi. Curabitur euismod, elit vel tincidunt laoreet, lectus risus blandit mauris, at cursus turpis urna a urna. Suspendisse varius fringilla odio, vitae condimentum lacus consectetur commodo. Nulla facilisi. Aenean nunc arcu, finibus sodales efficitur nec, facilisis in felis. Donec id lectus volutpat, fermentum est vel, commodo lacus. Donec volutpat facilisis elit, sit amet luctus nibh elementum in. Mauris sodales metus id efficitur vestibulum. Suspendisse aliquam erat purus, non viverra nulla convallis nec.
          <svg width="96" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g>
          <title>Code</title>
          <text y="35" x="48" fill="#000000" stroke-width="0" id="text" font-size="36" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#000000">&lt;/&gt;</text>
          </g>
          </svg>
          <svg width="96" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g>
          <title>Code</title>
          <text y="35" x="48" fill="#000000" stroke-width="0" id="text" font-size="36" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#000000">&lt;/&gt;</text>
          </g>
          </svg>
          <svg width="96" height="48" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
          <g>
          <title>Code</title>
          <text y="35" x="48" fill="#000000" stroke-width="0" id="text" font-size="36" font-family="Monospace" text-anchor="middle" xml:space="preserve" font-weight="normal" font-style="normal" stroke="#000000">&lt;/&gt;</text>
          </g>
          </svg>
          
          </p>
          Mauris molestie efficitur purus sit amet porta. Nam mattis neque mauris, sit amet tempor ante ornare at. Ut volutpat, magna a interdum vehicula, massa diam pharetra mi, semper volutpat ligula libero in mi. Nullam blandit tempor facilisis. Mauris ipsum sapien, fringilla vel justo id, commodo finibus ex. In pharetra mollis ante, sit amet semper arcu tristique sit amet. Proin consequat dui id eros convallis aliquam. Vivamus aliquam elit nec lobortis cursus. Integer mi enim, pulvinar nec est vitae, volutpat malesuada nisi. In sed risus sed augue rhoncus accumsan.`,
        category: "programming",
        labels: ["aritmética", "básico"],
        previous: "ex_G3Fer3rDS432",
        next: "ex_Plo43jjrR3",
        cases: [
          { input: { x: 10, y: 12 }, output: [22] },
          { input: { x: 24, y: 24 }, output: [48] },
          { input: { x: 1000, y: 35 }, output: [1035] },
          { input: { x: 28, y: 28 }, output: [56] },
        ],
      },
    },
  };
}
