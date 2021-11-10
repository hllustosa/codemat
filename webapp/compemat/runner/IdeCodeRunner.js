import CodeRunner, { CodeRunnerStates } from "./CodeRunner";

export const CodeManagerStatus = {
  RUNNING_TEST: "RUNNING_TEST",
  RUNNING_FULL: "RUNNING_FULL",
};

export default class IdeCodeRunner {
  constructor(code, input, onStatusChange, onNewOutput, onNewDebug) {
    this.code = code;
    this.input = input;
    this.onStatusChange = onStatusChange;
    this.onNewOutput = onNewOutput;
    this.onNewDebug = onNewDebug;
  }

  run = function () {
    
    this.codeRunner = new CodeRunner(
      this.input,
      this.code,
      this.onStatusChange,
      this.onNewOutput,
      this.onNewDebug
    );
    this.codeRunner.runCode();
  };

  interrupt = function () {
    if (
      this.codeRunner &&
      this.codeRunner.status === CodeRunnerStates.RUNNING
    ) {
      this.codeRunner.changeStatusTo(CodeRunnerStates.STOPPED);
    }
  };
}
