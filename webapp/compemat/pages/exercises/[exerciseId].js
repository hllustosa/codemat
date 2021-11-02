import Page from "../../components/Page";
import AppBar from "../../components/AppBar";
import React, { useEffect } from "react";
import problems from "../../public/problems/index.json";
import { Grid, Tooltip, makeStyles } from "@material-ui/core";
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
  Progress,
} from "../../components/Styled";
import ProblemaFrame from "../../components/ProblemFrame";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExecutionList from "../../components/ExecutionList";
import CodeRunnerManager from "../../runner/CoreRunnerManager";
import ResultDialog from "../../components/ResultDialog";
import { useQueryParams } from "../../seedwork/Utils";
import { postSubmission } from "../../seedwork/Requests";
import store from "../../redux/store";
import { decode } from "js-base64";
import dynamic from "next/dynamic";
import { translateCategory } from "../../seedwork/Translations";

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
    height: "calc(100vh - 60px)",
    maxHeight: "calc(100vh - 60px)",
    minHeight: "550px",
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
    minHeight: "550px",
  },
  problemContent: {
    padding: "15px",
    margin: "auto",
    maxWidth: "1000px",
    width: "calc(100% - 30px)",
  },
  problemContentFrame: {
    width: "100%",
    height: "calc(100vh - 310px)",
    minHeight: "330px",
    minWidth: "290px",
    backgroundColor: "#FFFFFF",
    border: "none",
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
    backgroundColor: "#FFFFFF",
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
          <Tooltip title="Minimizar Problema" placement="bottom-end">
            <BaseIconButton onClick={handleClick}>
              <ChevronLeftRounded />
            </BaseIconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container item direction="column" xs={12}>
        <Grid item xs={12}>
          <NoWrap className={classes.problemContent}>
            <NoWrapContainer>
              <span className={classes.markText}>{"Categoria: "} </span>{" "}
              <BaseChip label={translateCategory(data.category)} />
            </NoWrapContainer>
          </NoWrap>
        </Grid>

        <Grid item xs={12}>
          <div className={classes.problemContent}>
            <ProblemaFrame data={data} />
          </div>
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
  const { c } = useQueryParams();
  const paramCode = c ? decode(c) : "";
  const { codeSize, handleClick } = props;
  const executionLogRef = React.useRef(null);
  const [code, setCode] = React.useState(paramCode);
  const [running, setRunning] = React.useState(false);
  const [runner, setRunner] = React.useState({});
  const [entries, setEntries] = React.useState([]);
  const [showResult, setShowResult] = React.useState(false);
  const [result, setResult] = React.useState([]);
  const padding = { paddingRight: "10px", paddingLeft: "10px" };

  useEffect(() => {
    if (result.length) setShowResult(true);
  }, [result]);

  const handleTestExecutionFinished = (state) => {
    setRunning(false);
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

  const handleExecutionFinished = async (state) => {
    const correctAnswer = state.reduce((previousValue, currentValue) => {
      return previousValue && currentValue.answer;
    }, true);

    const executionError = state.reduce((previousValue, currentValue) => {
      if (!previousValue) {
        if (currentValue.hasError) {
          return currentValue.lastError;
        }
      }
    }, "");

    const data = {
      problem_id: props.data.id,
      code: code,
      report: {
        correctAnswer: correctAnswer,
        executionError: executionError ? executionError.split("<br/>")[0] : "",
      },
      time: new Date().toISOString(),
    };

    try {
      if (store.getState().isLogged) {
        await postSubmission(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRunning(false);
      setResult(state);
    }
  };

  const handleNewOutput = (output) => {
    if (Array.isArray(output)) output = JSON.stringify(output);

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

  const handleExecutionClick = () => {
    if (running) {
      if (runner) {
        runner.interrupt();
        setRunning(false);
      }
    } else {
      const runnerInstance = new CodeRunnerManager(
        props.data,
        code,
        handleExecutionFinished,
        handleNewOutput,
        handleNewDebug
      );

      setRunner(runnerInstance);
      setRunning(true);
      runnerInstance.runSolution();
    }
  };

  const handleStop = () => {
    if (running) {
      if (runner) {
        runner.interrupt();
        setRunning(false);
      }
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
          <Tooltip title="Minimizar Solução" placement="bottom-end">
            <BaseIconButton onClick={handleClick}>
              <ChevronRightRounded />
            </BaseIconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Title size={22}>Solução {running && <Progress />} </Title>
        </Grid>
        <Grid item>
          {!running && (
            <NoWrap>
              <Tooltip title="Testar" placement="bottom-end">
                <BaseIconButton onClick={handleTestClick}>
                  <PlayArrowRounded />
                </BaseIconButton>
              </Tooltip>
              <Tooltip title="Enviar Para Correção" placement="bottom-end">
                <BaseIconButton onClick={handleExecutionClick}>
                  <AssessmentRounded />
                </BaseIconButton>
              </Tooltip>
            </NoWrap>
          )}

          {running && (
            <NoWrap>
              <Tooltip title="Parar Execução" placement="bottom-end">
                <BaseIconButton onClick={handleStop}>
                  <StopRounded />
                </BaseIconButton>
              </Tooltip>
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
          <Tooltip title="Limpar Registros" placement="bottom-end">
            <BaseIconButton onClick={() => setEntries([])}>
              <ClearAllRounded />
            </BaseIconButton>
          </Tooltip>
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
      <ResultDialog
        open={showResult}
        onClose={() => setShowResult(false)}
        results={result}
      />
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
  const problemIds = Object.keys(problems);
  return {
    fallback: false,
    paths: problemIds.map((id) => ({
      params: {
        exerciseId: id,
      },
    })),
  };
}

export async function getStaticProps(context) {
  const exerciseId = context.params.exerciseId;
  const exerciseData = require(`../../public/problems/all/${exerciseId}.json`);
  return {
    props: {
      data: exerciseData,
    },
  };
}
