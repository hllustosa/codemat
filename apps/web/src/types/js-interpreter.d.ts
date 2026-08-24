declare module "js-interpreter" {
  export default class Interpreter {
    constructor(
      code: string,
      initFunc?: (interpreter: Interpreter, globalObject: object) => void
    );
    step(): boolean;
    setProperty(obj: object, name: string, value: unknown): void;
    createNativeFunction(fn: (...args: unknown[]) => unknown): unknown;
  }
}
