import { Router } from "express";
import * as admin from "firebase-admin";
import { requireAuth, AuthedRequest } from "../middleware/auth";
import { getExercisePublic, getExerciseSecret } from "../lib/contentStore";
import { gradeAgainstCases } from "../lib/runner";

export const gradeRouter = Router();

gradeRouter.post("/", requireAuth, async (req: AuthedRequest, res) => {
  const { exerciseId, code } = req.body || {};
  if (!exerciseId || typeof code !== "string" || !code.trim()) {
    res.status(400).json({ error: "invalid_request" });
    return;
  }

  const [exercise, secret] = await Promise.all([
    getExercisePublic(exerciseId),
    getExerciseSecret(exerciseId),
  ]);

  if (!exercise || !secret?.cases?.length) {
    res.status(404).json({ error: "not_found" });
    return;
  }

  const result = gradeAgainstCases(code, secret.cases);

  // Persist progress without trusting client-reported correctness
  const uid = req.user!.uid;
  const db = admin.firestore();
  const docRef = db.collection("UserStats").doc(uid);
  const submission = {
    problem_id: exerciseId,
    problem_category: exercise.category,
    code,
    report: { correctAnswer: result.correct },
    time: Date.now(),
  };

  await db.runTransaction(async (tx) => {
    const doc = await tx.get(docRef);
    if (!doc.exists) {
      tx.set(docRef, {
        trials: [
          {
            problem_id: exerciseId,
            problem_category: exercise.category,
            status: result.correct ? "solved" : "tried",
            tried_count: 1,
          },
        ],
        submissions: [submission],
      });
      return;
    }

    const data = doc.data() as {
      trials: {
        problem_id: string;
        problem_category: string;
        status: string;
        tried_count: number;
      }[];
      submissions: unknown[];
    };

    const trials = [...(data.trials || [])];
    const existing = trials.find((t) => t.problem_id === exerciseId);
    if (existing) {
      if (result.correct) existing.status = "solved";
      existing.tried_count += 1;
    } else {
      trials.push({
        problem_id: exerciseId,
        problem_category: exercise.category,
        status: result.correct ? "solved" : "tried",
        tried_count: 1,
      });
    }

    const submissions = [...(data.submissions || [])];
    if (submissions.length >= 50) submissions.shift();
    submissions.push(submission);

    tx.update(docRef, { trials, submissions });
  });

  // Only right/wrong (and counts) — never expected outputs
  res.json({ correct: result.correct });
});
