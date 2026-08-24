import * as path from "path";
import * as fs from "fs";

const dataRoot = path.resolve(__dirname, "../../data");

export function publicDataPath(...parts: string[]): string {
  return path.join(dataRoot, "public", ...parts);
}

export function secretsDataPath(...parts: string[]): string {
  return path.join(dataRoot, "private-cases", ...parts);
}

export function readJsonFile<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}
