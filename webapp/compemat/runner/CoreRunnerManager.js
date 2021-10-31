import CodeRunner, { CodeRunnerStates } from "./CodeRunner";

export const CodeManagerStatus = {
  RUNNING_TEST: "RUNNING_TEST",
  RUNNING_FULL: "RUNNING_FULL",
};

export default class CodeRunnerManager {
  constructor(problem, code, onStatusChange, onNewOutput, onNewDebug) {
    this.problem = problem;
    this.code = code;
    this.onStatusChange = onStatusChange;
    this.onNewOutput = onNewOutput;
    this.onNewDebug = onNewDebug;
  }

  runTest = function () {
    this.status = CodeManagerStatus.RUNNING_TEST;
    this.currentCase = 0;
    this.codeRunner = null;
    this.states = [];
    this.run();
  };

  runSolution = function () {
    this.status = CodeManagerStatus.RUNNING_FULL;
    this.currentCase = 0;
    this.codeRunner = null;
    this.states = [];
    this.problem.cases = this.problem.cases
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    this.run();
  };

  run = function () {
    const onStatusChangeEnricher = this.onStatusChangeEnricher.bind(this);
    this.codeRunner = new CodeRunner(
      this.problem.cases[this.currentCase].input,
      this.code,
      onStatusChangeEnricher,
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

  onStatusChangeEnricher = function (newStatus, state) {
    
    if (
      newStatus === CodeRunnerStates.FINISHED ||
      (newStatus === CodeRunnerStates.STOPPED && state.lastError)
    ) {
      state["hasError"] = state.lastError ? true : false;
      state["answer"] = this.checkAnswer(state);
      state["expected"] = this.problem.cases[this.currentCase].output;
      
      this.states.push(state);

      if (
        this.status === CodeManagerStatus.RUNNING_TEST ||
        this.currentCase === this.problem.cases.length - 1
      ) {
        this.onStatusChange(this.states);
      } else {
        this.currentCase++;
        this.run();
      }
    }
  };

  checkAnswer = function (state) {
    var expectedOutput = this.problem.cases[this.currentCase].output;
    var outputs = state.outputs;
    
    state["expectedOutput"] = expectedOutput;

    if(!outputs.length){
      return false;
    }
    
    if(outputs.length !== expectedOutput.length){
      return false;
    }

    for (let i = 0; i < outputs.length; i++) {
      if (JSON.stringify(outputs[i]) !== JSON.stringify(expectedOutput[i])) return false;
    }

    return true;
  };
}
