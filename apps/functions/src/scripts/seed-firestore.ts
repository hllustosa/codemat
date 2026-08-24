import * as fs from "fs";
import * as path from "path";
import * as admin from "firebase-admin";

/**
 * Seeds Firestore from apps/functions/data (run after build-content).
 * Requires GOOGLE_APPLICATION_CREDENTIALS.
 */
async function main() {
  if (!admin.apps.length) {
    admin.initializeApp();
  }
  const db = admin.firestore();
  const dataRoot = path.resolve(__dirname, "../../data");
  const publicRoot = path.join(dataRoot, "public");
  const secretsRoot = path.join(dataRoot, "private-cases");

  const exercisesCatalog = JSON.parse(
    fs.readFileSync(path.join(publicRoot, "exercises-catalog.json"), "utf8")
  );
  await db.doc("catalog/exercises").set(exercisesCatalog);

  const classesCatalog = JSON.parse(
    fs.readFileSync(path.join(publicRoot, "classes-catalog.json"), "utf8")
  );
  await db.doc("catalog/classes").set(classesCatalog);

  const exerciseFiles = fs
    .readdirSync(path.join(publicRoot, "exercises"))
    .filter((f) => f.endsWith(".json"));
  for (const file of exerciseFiles) {
    const doc = JSON.parse(
      fs.readFileSync(path.join(publicRoot, "exercises", file), "utf8")
    );
    await db.doc(`exercises/${doc.id}`).set(doc);
  }

  const secretFiles = fs
    .readdirSync(secretsRoot)
    .filter((f) => f.endsWith(".json"));
  for (const file of secretFiles) {
    const doc = JSON.parse(
      fs.readFileSync(path.join(secretsRoot, file), "utf8")
    );
    await db.doc(`exerciseSecrets/${doc.id}`).set(doc);
  }

  const lessonFiles = fs
    .readdirSync(path.join(publicRoot, "lessons"))
    .filter((f) => f.endsWith(".json"));
  for (const file of lessonFiles) {
    const doc = JSON.parse(
      fs.readFileSync(path.join(publicRoot, "lessons", file), "utf8")
    );
    await db.doc(`lessons/${doc.id}`).set(doc);
  }

  console.log(
    `Seeded ${exerciseFiles.length} exercises, ${secretFiles.length} secrets, ${lessonFiles.length} lessons`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
