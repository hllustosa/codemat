import * as admin from "firebase-admin";
import {
  publicDataPath,
  secretsDataPath,
  readJsonFile,
} from "./paths";

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

export type ExerciseSecret = {
  id: string;
  cases: { input: Record<string, unknown>; output: unknown[] }[];
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

function useFirestore(): boolean {
  return process.env.CONTENT_SOURCE === "firestore";
}

export async function getExercisesCatalog(): Promise<{
  exercises: { id: string; name: string; category: string; labels: string[] }[];
}> {
  if (useFirestore()) {
    const snap = await admin.firestore().doc("catalog/exercises").get();
    if (snap.exists) return snap.data() as { exercises: never[] };
  }
  return (
    readJsonFile(publicDataPath("exercises-catalog.json")) || { exercises: [] }
  );
}

export async function getExercisePublic(
  id: string
): Promise<ExercisePublic | null> {
  if (useFirestore()) {
    const snap = await admin.firestore().doc(`exercises/${id}`).get();
    if (snap.exists) return snap.data() as ExercisePublic;
  }
  return readJsonFile<ExercisePublic>(publicDataPath("exercises", `${id}.json`));
}

export async function getExerciseSecret(
  id: string
): Promise<ExerciseSecret | null> {
  if (useFirestore()) {
    const snap = await admin.firestore().doc(`exerciseSecrets/${id}`).get();
    if (snap.exists) return snap.data() as ExerciseSecret;
  }
  return readJsonFile<ExerciseSecret>(secretsDataPath(`${id}.json`));
}

export async function getClassesCatalog(): Promise<{
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
}> {
  if (useFirestore()) {
    const snap = await admin.firestore().doc("catalog/classes").get();
    if (snap.exists) return snap.data() as { units: never[] };
  }
  return (
    readJsonFile(publicDataPath("classes-catalog.json")) || { units: [] }
  );
}

export async function getLesson(id: string): Promise<Lesson | null> {
  if (useFirestore()) {
    const snap = await admin.firestore().doc(`lessons/${id}`).get();
    if (snap.exists) return snap.data() as Lesson;
  }
  return readJsonFile<Lesson>(publicDataPath("lessons", `${id}.json`));
}
