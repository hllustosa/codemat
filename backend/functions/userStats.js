const express = require("express");
const cors = require("cors");
const functions = require("firebase-functions");
const authorization = require("./authorization");
const admin = require("firebase-admin");
const problems = require("./problems");

//setting up app
const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(authorization.middleware);

app.get("/", async (request, response) => {
  try {
    const db = admin.firestore();
    const doc = await db
      .collection("UserStats")
      .doc(request["user"].user_id)
      .get();

    if (doc.exists) {
      return response.status(200).send(doc.data());
    } else {
      return response.status(200).send({
        tried_problems: [],
        submissions: [],
      });
    }
  } catch (error) {
    functions.logger.error("Error while retrieving user stats:", error);
    response.status(500).send("Internal server error");
  }
});

app.post("/", async (request, response) => {
  try {
    const db = admin.firestore();
    const docRef = db.collection("UserStats").doc(request["user"].user_id);
    const { newSubmission, isValid } = validate(request.body);

    if (!isValid) {
      response.status(400).send();
      return;
    }

    await db.runTransaction(async (transaction) => {
      const doc = await transaction.get(docRef);

      if (doc.exists) {
        const trials = updateTrials(doc.data(), newSubmission);
        const submissions = updateSubmission(doc.data(), newSubmission);

        const updated = {
          trials: trials,
          submissions: submissions,
        };
        functions.logger.info("updated", JSON.stringify(trials));
        transaction.update(docRef, updated);
      } else {
        transaction.set(docRef, { trials: [], submissions: [] });
      }
    });

    response.status(200).send();
  } catch (error) {
    functions.logger.error("Error updating user stats:", error);
    response.status(500).send("Internal server error");
  }
});

function validate(data) {
  if (
    !data ||
    !data.problem_id ||
    !data.code ||
    !data.report ||
    !problems.data[data.problem_id] //check if is valid problem
  ) {
    functions.logger.info("Invalid request:", data);
    return { newSubmission: null, isValid: false };
  }

  return {
    newSubmission: {
      problem_id: data.problem_id,
      problem_category: problems.data[data.problem_id],
      code: data.code,
      report: data.report,
    },
    isValid: true,
  };
}

function updateTrials(doc, newSubmission) {
  let found = false;

  for (const trial of doc.trials) {
    if (trial.problem_id === newSubmission.problem_id) {
      if (newSubmission.report.correctAnswer) {
        trial.status = "solved";
      }
      trial.tried_count++;
      found = true;
      break;
    }
  }

  if (!found) {
    doc.trials.push({
      problem_id: newSubmission.problem_id,
      problem_category: newSubmission.problem_category,
      status: newSubmission.report.correctAnswer ? "solved" : "tried",
      tried_count: 1,
    });
  }

  return doc.trials;
}

function updateSubmission(doc, newSubmission) {
  const MAX_SUBMISSIONS = 50;
  if (doc.submissions.length >= MAX_SUBMISSIONS) {
    doc.submissions.shift();
  }

  doc.submissions.push(newSubmission);

  return doc.submissions;
}

exports.app = app;
