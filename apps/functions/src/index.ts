import express from "express";
import cors from "cors";
import * as admin from "firebase-admin";
import { onRequest } from "firebase-functions/v2/https";
import { contentRouter } from "./routes/content";
import { gradeRouter } from "./routes/grade";
import { statsRouter } from "./routes/stats";

if (!admin.apps.length) {
  admin.initializeApp();
}

const allowedOrigins = [
  "https://codemat--codematbr.us-central1.hosted.app",
  "https://codematbr.firebaseapp.com",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
];

const app = express();
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin)) {
        cb(null, true);
        return;
      }
      cb(null, false);
    },
  })
);
app.use(express.json({ limit: "256kb" }));

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "codemat-api" });
});

app.use("/content", contentRouter);
app.use("/grade", gradeRouter);
app.use("/stats", statsRouter);

export const api = onRequest(
  {
    region: "us-central1",
    cors: false,
    memory: "512MiB",
    timeoutSeconds: 60,
  },
  app
);
