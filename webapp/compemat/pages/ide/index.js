import Page from "../../components/Page";
import AppBar from "../../components/AppBar";
import React, { useEffect } from "react";
import { Grid, Tooltip, makeStyles, Tabs, Tab } from "@material-ui/core";
import {
  PlayArrowRounded,
  StopRounded,
  ClearAllRounded,
  ShareRounded,
} from "@material-ui/icons/";
import {
  Title,
  BaseIconButton,
  NoWrap,
  Progress,
  TabPanel,
} from "../../components/Styled";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ExecutionList from "../../components/ExecutionList";
import IdeCodeRunner from "../../runner/IdeCodeRunner";
import { useQueryParams } from "../../seedwork/Utils";
import { decode, encode } from "js-base64";
import dynamic from "next/dynamic";
import { ERROR_INPUT } from "../../seedwork/Errors";
import { copyTextToClipboard } from "../../seedwork/Utils";

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
    overflow: "scroll",
    "-webkit-transition": "width 1s",
    "-moz-transition": "width 1s",
    "-o-transition": "width 1s",
    "-ms-transition": "width 1s",
    transition: "width 1s",
    height: "calc(100vh - 60px)",
    maxHeight: "calc(100vh - 60px)",
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
    height: "calc(100vh - 330px)",
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

function CodePane(props) {
  const classes = styles();
  const { c, i } = useQueryParams();
  const paramCode = c ? decode(c) : "";
  const paramInput = i ? decode(i) : "{ }";
  const executionLogRef = React.useRef(null);
  const [code, setCode] = React.useState(paramCode);
  const [input, setInput] = React.useState(paramInput);
  const [running, setRunning] = React.useState(false);
  const [runner, setRunner] = React.useState({});
  const [entries, setEntries] = React.useState([]);
  const [tabValue, setTabValue] = React.useState(0);

  const padding = { paddingRight: "10px", paddingLeft: "10px" };
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleTestExecutionFinished = (state, status) => {
    setRunning(false);

    if (status.lastError) {
      entries.push({ content: status.lastError, type: "error" });
    }

    setEntries([...entries]);
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
      let codeInput = {};
      try {
        codeInput = JSON.parse(input);
      } catch (error) {
        entries.push({ content: ERROR_INPUT(0, error), type: "error" });
        setEntries([...entries]);
      }

      const runnerInstance = new IdeCodeRunner(
        code,
        codeInput,
        handleTestExecutionFinished,
        handleNewOutput,
        handleNewDebug
      );

      setRunner(runnerInstance);
      setRunning(true);
      runnerInstance.run();
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

  const shareLink = () => {
    const c = encode(code, true);
    const i = encode(input, true);
    const link = `${window.location.protocol}//${window.location.host}/ide?c=${c}&i=${i}`;
    copyTextToClipboard(link);
    alert("Link copiado para área de transferência:\n");
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
    >
      <Grid
        container
        style={{ padding: "10px" }}
        item
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item>
          <Title size={22}>Código {running && <Progress />} </Title>
        </Grid>
        <Grid item>
          {!running && (
            <NoWrap>
              <Tooltip title="Executar" placement="bottom-end">
                <BaseIconButton onClick={handleTestClick}>
                  <PlayArrowRounded />
                </BaseIconButton>
              </Tooltip>
              <Tooltip title="Compartilhar Link" placement="bottom-end">
                <BaseIconButton onClick={shareLink}>
                  <ShareRounded />
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

      {isSmallScreen && (
        <Grid container item style={{ ...padding }} direction="row">
          <Tabs
            value={tabValue}
            indicatorColor="primary"
            textColor="primary"
            onChange={(_, newValue) => setTabValue(newValue)}
            aria-label="navegação"
            variant="scrollable"
            scrollButtons="auto"
            style={{ paddingBottom: "15px" }}
          >
            <Tab disableRipple label="Código" />
            <Tab disableRipple label="Entrada" />
          </Tabs>

          <Grid item container>
            <TabPanel style={{ width: "100%" }} value={tabValue} index={0}>
              <TextEditor code={code} setCode={setCode} readOnly={running} />
            </TabPanel>
            <TabPanel style={{ width: "100%" }} value={tabValue} index={1}>
              <TextEditor code={input} setCode={setInput} readOnly={running} />
            </TabPanel>
          </Grid>
        </Grid>
      )}

      {!isSmallScreen && (
        <Grid container item style={{ ...padding }} direction="row">
          <Grid item xs={8}>
            <TextEditor code={code} setCode={setCode} readOnly={running} />
          </Grid>
          <Grid item xs={4}>
            <TextEditor code={input} setCode={setInput} readOnly={running} />
          </Grid>
        </Grid>
      )}
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
          <Title size={14}>Terminal</Title>
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
    </Grid>
  );
}

function Body(props) {
  const classes = styles();

  return (
    <main className={classes.root}>
      <Grid className={classes.root} container direction="row" spacing={0}>
        <CodePane />
      </Grid>
    </main>
  );
}

function Exercise(props) {
  return (
    <React.Fragment>
      <AppBar title={"IDE"} />
      <Body {...props} />
    </React.Fragment>
  );
}

export default Page(Exercise);
