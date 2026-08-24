import Interpreter from "js-interpreter";

const MAX_TIMEOUT_MS = 15_000;

export type CaseResult = {
  passed: boolean;
};

function prepareCode(code: string, input: Record<string, unknown>): string {
  let prepared = code;
  const cloned: Record<string, unknown> = { ...input };
  for (const key of Object.keys(cloned)) {
    if (typeof cloned[key] === "object" && cloned[key] !== null) {
      cloned[key] = JSON.stringify(cloned[key]);
      prepared = prepared.replace(
        `input('${key}')`,
        `JSON.parse(input('${key}'))`
      );
      prepared = prepared.replace(
        `input("${key}")`,
        `JSON.parse(input("${key}"))`
      );
    }
  }
  return prepared;
}

function convertData(data: unknown): unknown {
  if (data && typeof data === "object") {
    const obj = data as { class?: string; properties?: Record<string, unknown> };
    if (obj.class === "Array" && obj.properties) {
      const length = Object.keys(obj.properties).length;
      const arrayOutput: unknown[] = [];
      for (let i = 0; i < length; i++) {
        arrayOutput.push(obj.properties[i]);
      }
      return arrayOutput;
    }
    if (obj.properties) return obj.properties;
  }
  return data;
}

export function runStudentCode(
  code: string,
  input: Record<string, unknown>
): { outputs: unknown[]; error?: string } {
  const outputs: unknown[] = [];
  const prepared = prepareCode(code, input);
  const inputForRunner: Record<string, unknown> = { ...input };

  for (const key of Object.keys(inputForRunner)) {
    if (typeof inputForRunner[key] === "object" && inputForRunner[key] !== null) {
      inputForRunner[key] = JSON.stringify(inputForRunner[key]);
    }
  }

  try {
    const interpreter = new Interpreter(prepared, (interp, globalObject) => {
      const outputWrapper = (data: unknown) => {
        outputs.push(convertData(data));
      };
      const inputWrapper = (key: unknown) => {
        return inputForRunner[String(key)];
      };
      const debugWrapper = () => undefined;

      interp.setProperty(
        globalObject,
        "output",
        interp.createNativeFunction(outputWrapper)
      );
      interp.setProperty(
        globalObject,
        "input",
        interp.createNativeFunction(inputWrapper)
      );
      interp.setProperty(
        globalObject,
        "debug",
        interp.createNativeFunction(debugWrapper)
      );
    });

    const start = Date.now();
    while (interpreter.step()) {
      if (Date.now() - start > MAX_TIMEOUT_MS) {
        return { outputs, error: "timeout" };
      }
    }
    return { outputs };
  } catch (err) {
    return {
      outputs,
      error: err instanceof Error ? err.message : "runtime_error",
    };
  }
}

function normalize(value: unknown): string {
  if (typeof value === "string") return value.trim();
  if (typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }
  return JSON.stringify(value);
}

export function outputsMatch(
  actual: unknown[],
  expected: unknown[]
): boolean {
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < expected.length; i++) {
    if (normalize(actual[i]) !== normalize(expected[i])) return false;
  }
  return true;
}

export function gradeAgainstCases(
  code: string,
  cases: { input: Record<string, unknown>; output: unknown[] }[]
): { correct: boolean; passed: number; total: number } {
  let passed = 0;
  for (const testCase of cases) {
    const { outputs, error } = runStudentCode(code, testCase.input || {});
    if (!error && outputsMatch(outputs, testCase.output || [])) {
      passed += 1;
    }
  }
  const total = cases.length;
  return { correct: total > 0 && passed === total, passed, total };
}
