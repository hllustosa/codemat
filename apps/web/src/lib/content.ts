import fs from "node:fs";
import path from "node:path";

const publicRoot = path.join(process.cwd(), "../functions/data/public");

function readJson<T>(filePath: string): T | null {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as T;
}

export type ExerciseListItem = {
  id: string;
  name: string;
  category: string;
  labels: string[];
};

export type ExercisePublic = {
  id: string;
  name: string;
  category: string;
  labels: string[];
  statementHtml: string;
  examples: { id: number; input: Record<string, unknown> }[];
  inputKeys: string[];
  previous?: string;
  next?: string;
};

export type Lesson = {
  id: string;
  section: string;
  content: string;
  title: string;
  author: string;
  authorLink: string;
  unitTitle: string;
  bodyHtml: string;
};

export type ClassesCatalog = {
  units: {
    unitTitle: string;
    items: {
      id: string;
      title: string;
      section: string;
      content: string;
      link: string;
      author: string;
      authorLink: string;
    }[];
  }[];
};

export function getExercisesCatalog(): ExerciseListItem[] {
  const data = readJson<{ exercises: ExerciseListItem[] }>(
    path.join(publicRoot, "exercises-catalog.json")
  );
  return data?.exercises ?? [];
}

export function getExercise(id: string): ExercisePublic | null {
  return readJson<ExercisePublic>(
    path.join(publicRoot, "exercises", `${id}.json`)
  );
}

export function getClassesCatalog(): ClassesCatalog {
  return (
    readJson<ClassesCatalog>(path.join(publicRoot, "classes-catalog.json")) || {
      units: [],
    }
  );
}

export function getLesson(id: string): Lesson | null {
  return readJson<Lesson>(path.join(publicRoot, "lessons", `${id}.json`));
}

export function getLessonByRoute(section: string, content: string): Lesson | null {
  return getLesson(`${section}-${content}`);
}
