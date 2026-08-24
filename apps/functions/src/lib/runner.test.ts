import { describe, expect, it } from "vitest";
import { gradeAgainstCases, outputsMatch, runStudentCode } from "./runner";

describe("runner", () => {
  it("runs hello-world style code", () => {
    const code = `
      var nome = input('nome');
      output('Olá, ' + nome);
    `;
    const { outputs, error } = runStudentCode(code, { nome: "Maria" });
    expect(error).toBeUndefined();
    expect(outputs).toEqual(["Olá, Maria"]);
  });

  it("grades all cases", () => {
    const code = `
      var nome = input('nome');
      output('Olá, ' + nome);
    `;
    const result = gradeAgainstCases(code, [
      { input: { nome: "A" }, output: ["Olá, A"] },
      { input: { nome: "B" }, output: ["Olá, B"] },
    ]);
    expect(result.correct).toBe(true);
    expect(result.passed).toBe(2);
  });

  it("detects wrong output", () => {
    expect(outputsMatch(["x"], ["y"])).toBe(false);
  });
});
