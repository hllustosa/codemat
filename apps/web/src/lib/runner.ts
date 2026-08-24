export type RunnerResult = {
  outputs: unknown[];
  error?: string;
};

export async function runCodeLocally(
  code: string,
  input: Record<string, unknown>
): Promise<RunnerResult> {
  const InterpreterMod = await import("js-interpreter");
  const Interpreter = InterpreterMod.default;
  type InterpreterInstance = InstanceType<typeof Interpreter>;
  const outputs: unknown[] = [];
  let prepared = code;
  const inputCopy: Record<string, unknown> = { ...input };

  for (const key of Object.keys(inputCopy)) {
    if (typeof inputCopy[key] === "object" && inputCopy[key] !== null) {
      inputCopy[key] = JSON.stringify(inputCopy[key]);
      prepared = prepared
        .replace(`input('${key}')`, `JSON.parse(input('${key}'))`)
        .replace(`input("${key}")`, `JSON.parse(input("${key}"))`);
    }
  }

  const convert = (data: unknown): unknown => {
    if (data && typeof data === "object") {
      const obj = data as { class?: string; properties?: Record<string, unknown> };
      if (obj.class === "Array" && obj.properties) {
        const length = Object.keys(obj.properties).length;
        const arr: unknown[] = [];
        for (let i = 0; i < length; i++) arr.push(obj.properties[i]);
        return arr;
      }
      if (obj.properties) return obj.properties;
    }
    return data;
  };

  try {
    const interpreter = new Interpreter(
      prepared,
      (interp: InterpreterInstance, globalObject: object) => {
      interp.setProperty(
        globalObject,
        "output",
        interp.createNativeFunction((data: unknown) => {
          outputs.push(convert(data));
        })
      );
      interp.setProperty(
        globalObject,
        "input",
        interp.createNativeFunction((key: unknown) => inputCopy[String(key)])
      );
      interp.setProperty(
        globalObject,
        "debug",
        interp.createNativeFunction(() => undefined)
      );
    }
    );

    const start = Date.now();
    while (interpreter.step()) {
      if (Date.now() - start > 15000) {
        return { outputs, error: "Tempo esgotado (possível loop infinito)." };
      }
    }
    return { outputs };
  } catch (err) {
    return {
      outputs,
      error: err instanceof Error ? err.message : "Erro de execução",
    };
  }
}
