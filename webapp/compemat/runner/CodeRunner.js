import Interpreter from "js-interpreter";

const MAX_TIMEOUT = 30000;
const CODE_BLOCK = `
    try {
        (function(){
            new Function(\`code\`);
        })()
    }
    catch(e) {
 
    }
`;

export default class CodeRunner {
  constructor(problem, code, onResultReady) {
    this.problemData = problem;
    this.setUpErrorCatch();
    this.interpreter = new Interpreter(code);
    this.timedOut = false;
    this.error = null;
    this.result = null;
    this.onResultReady = onResultReady;
  }

  setUpErrorCatch = function () {
    window.onerror = function (message, file, line, col, error) {
      console.log("Error occurred1: " + error.message);
      this.error = error;
      return true;
    };
    window.addEventListener("error", function (e) {
      console.log("Error occurred2: " + e.error.message);
      return true;
    });
  };

  runCode = function () {
   
    throw new Error("eror");
    return;

    try {
      let acorn = require("acorn");
      console.log("r: " + acorn.parse(this.code));
      return;
    } catch (error) {
      console.log("capturado acc" + error);
    }

    try {
      var watchDogTimeout = window.setTimeout(() => {
        this.timedOut = true;
      }, MAX_TIMEOUT);

      const nextStep = () => {
        if (!this.timedOut && this.interpreter.step()) {
          window.setTimeout(nextStep, 0);
        } else {
          this.result = this.interpreter.value;
          this.onResultReady(this.result);
          clearTimeout(watchDogTimeout);
        }
      };

      nextStep();
    } catch (error) {
      console.log("capturado " + error);
    }
  };
}
