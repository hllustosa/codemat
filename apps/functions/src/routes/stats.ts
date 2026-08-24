import { Router } from "express";
import * as admin from "firebase-admin";
import { requireAuth, AuthedRequest } from "../middleware/auth";

export const statsRouter = Router();

statsRouter.get("/", requireAuth, async (req: AuthedRequest, res) => {
  const uid = req.user!.uid;
  const doc = await admin.firestore().collection("UserStats").doc(uid).get();
  if (!doc.exists) {
    res.json({ tried_problems: [], trials: [], submissions: [] });
    return;
  }
  res.json(doc.data());
});
