import { Router } from "express";
import {
  getClassesCatalog,
  getExercisePublic,
  getExercisesCatalog,
  getLesson,
} from "../lib/contentStore";

export const contentRouter = Router();

contentRouter.get("/exercises", async (_req, res) => {
  const catalog = await getExercisesCatalog();
  res.json(catalog);
});

contentRouter.get("/exercises/:id", async (req, res) => {
  const exercise = await getExercisePublic(req.params.id);
  if (!exercise) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.json(exercise);
});

contentRouter.get("/classes", async (_req, res) => {
  const catalog = await getClassesCatalog();
  res.json(catalog);
});

contentRouter.get("/lessons/:id", async (req, res) => {
  const lesson = await getLesson(req.params.id);
  if (!lesson) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.json(lesson);
});

contentRouter.get("/lessons/:section/:content", async (req, res) => {
  const id = `${req.params.section}-${req.params.content}`;
  const lesson = await getLesson(id);
  if (!lesson) {
    res.status(404).json({ error: "not_found" });
    return;
  }
  res.json(lesson);
});
