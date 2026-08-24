declare module "js-interpreter" {
  export default class Interpreter {
    constructor(code: string, initFunc?: (interpreter: Interpreter, globalObject: object) => void);
    run(): boolean;
    step(): boolean;
    setProperty(obj: object, name: string, value: unknown): void;
    createNativeFunction(fn: (...args: unknown[]) => unknown): unknown;
  }
}
