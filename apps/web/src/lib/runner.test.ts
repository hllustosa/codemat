import { describe, expect, it } from "vitest";

function outputsMatch(a: unknown[], b: unknown[]): boolean {
  if (a.length !== b.length) return false;
  return a.every((v, i) => String(v).trim() === String(b[i]).trim());
}

describe("outputsMatch", () => {
  it("compares string outputs", () => {
    expect(outputsMatch(["a"], ["a"])).toBe(true);
    expect(outputsMatch(["a"], ["b"])).toBe(false);
  });
});
