import Interpreter from "js-interpreter";
import {
  TIMEOUT_ERROR_HTML,
  TYPE_ERROR_HTML,
  SYNTAX_ERROR_HTML,
  REFERENCE_ERROR_HTML,
  RANGE_ERROR_HTML,
  ERROR_HTML,
  TimeOutError,
} from "../seedwork/Errors";

const MAX_TIMEOUT = 30000;

export const CodeRunnerStates = {
  INITIAL: "INITIAL",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
  FINISHED: "FINISHED",
};

export default class CodeRunner {
  constructor(input, code, onStatusChange, onNewOutput, onNewDebug) {
    try {
      this.input = input;
      this.onStatusChange = onStatusChange;
      this.code = code;
      this.debugLogs = [];
      this.outputs = [];

      const debugLogs = this.debugLogs;
      const outputs = this.outputs;

      var initFunc = function (interpreter, globalObject) {
        var debug_log_wrapper = function debug_log(data) {
          if (onNewDebug) onNewDebug(data);
          debugLogs.push(data);
        };

        var output_wrapper = function output(data) {
          if (onNewOutput) onNewOutput(data);
          outputs.push(data);
        };

        var input_wrapper = function input_function(key) {
          return input[key];
        };

        interpreter.setProperty(
          globalObject,
          "debug",
          interpreter.createNativeFunction(debug_log_wrapper)
        );

        interpreter.setProperty(
          globalObject,
          "output",
          interpreter.createNativeFunction(output_wrapper)
        );

        interpreter.setProperty(
          globalObject,
          "input",
          interpreter.createNativeFunction(input_wrapper)
        );
      };

      this.interpreter = new Interpreter(code, initFunc);
      this.timedOut = false;
      this.result = null;
      this.currentLine = 0;
      this.status = CodeRunnerStates.INITIAL;
      this.createLineRanges();
    } catch (error) {
      this.handleError(error);
    }
  }

  runCode = function () {
    this.lastError = "";
    this.timedOut = false;

    if (this.status != CodeRunnerStates.INITIAL) return;

    this.changeStatusTo(CodeRunnerStates.RUNNING);

    var watchDogTimeout = window.setTimeout(() => {
      this.timedOut = true;
    }, MAX_TIMEOUT);

    const nextStep = () => {
      try {
        this.updateCurrentLine();

        if (
          !this.timedOut &&
          this.status == CodeRunnerStates.RUNNING &&
          this.interpreter.step()
        ) {
          window.setTimeout(nextStep, 0);
        } else {
          clearTimeout(watchDogTimeout);

          if (this.timedOut) {
            throw new TimeOutError();
          }

          this.result = this.interpreter.value;
          this.changeStatusTo(CodeRunnerStates.FINISHED);
        }
      } catch (error) {
        this.handleError(error);
      }
    };

    nextStep();
  };

  createLineRanges = function () {
    const lines = this.code.split("\n");
    this.lineRanges = [];
    let offset = 0;

    for (const line of lines) {
      this.lineRanges.push({ start: offset, end: offset + line.length });
      offset += line.length + 1;
    }
  };

  handleError = function (error) {
    const line = this.currentLine;

    if (error instanceof TimeOutError) {
      this.lastError = TIMEOUT_ERROR_HTML(line, error);
    } else if (error instanceof TypeError) {
      this.lastError = TYPE_ERROR_HTML(line, error);
    } else if (error instanceof ReferenceError) {
      this.lastError = REFERENCE_ERROR_HTML(line, error);
    } else if (error instanceof RangeError) {
      this.lastError = RANGE_ERROR_HTML(line, error);
    } else if (error instanceof SyntaxError) {
      this.lastError = SYNTAX_ERROR_HTML(this.getSyntaErrorLine(error), error);
    } else {
      this.lastError = ERROR_HTML(line, error);
    }

    this.changeStatusTo(CodeRunnerStates.STOPPED);
  };

  updateCurrentLine = function () {
    try {
      const pos = this.interpreter.stateStack.length - 1;
      const trace = this.interpreter.stateStack[pos];
      const node = trace.node;

      if (node.type !== "Program") {
        for (let i = 0; i < this.lineRanges.length; i++) {
          const lineRange = this.lineRanges[i];

          if (node.start >= lineRange.start && node.start <= lineRange.end) {
            this.currentLine = i + 1;
            break;
          }
        }
      }
    } catch (error) {}
  };

  changeStatusTo = function (newStatus) {
    this.status = newStatus;

    if (this.onStatusChange) {
      const state = {
        lastError: this.lastError,
        currentLine: this.currentLine,
        input: this.input,
        outputs: this.outputs,
        timedOut: this.timedOut,
        debugLogs: this.debugLogs,
        result: this.result,
      };

      this.onStatusChange(newStatus, state);
    }
  };

  getSyntaErrorLine = function (error) {
    try {
      var regExp = /\(([^)]+)\)/;
      var matches = regExp.exec(error.message);
      return matches[1].split(":")[0];
    } catch (error) {
      return 0;
    }
  };
}
