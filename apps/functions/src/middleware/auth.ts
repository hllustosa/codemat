import { Request, Response, NextFunction } from "express";
import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

export type AuthedRequest = Request & {
  user?: admin.auth.DecodedIdToken;
};

export async function requireAuth(
  req: AuthedRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  const header = req.headers.authorization;
  if (!header?.startsWith("Bearer ")) {
    res.status(401).json({ error: "unauthorized" });
    return;
  }
  const idToken = header.split("Bearer ")[1];
  try {
    req.user = await admin.auth().verifyIdToken(idToken);
    next();
  } catch (error) {
    functions.logger.warn("Invalid ID token", error);
    res.status(401).json({ error: "unauthorized" });
  }
}
