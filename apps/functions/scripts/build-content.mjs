#!/usr/bin/env node
/**
 * Builds public + secret exercise/lesson content from legacy/ into apps/functions/data/.
 * Public payloads never include expected outputs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "../../..");
const legacyExercises = path.join(root, "legacy/exercises/all");
const legacyIndex = path.join(root, "legacy/exercises/index.json");
const legacyClassesMenu = path.join(root, "legacy/classes/classes-menu.json");
const legacyClassesAll = path.join(root, "legacy/classes/all");
const outPublic = path.join(root, "apps/functions/data/public");
const outSecrets = path.join(root, "apps/functions/data/private-cases");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function stripJsxToHtml(source) {
  // Very rough extraction of string content from legacy Class JSX modules
  let s = source;
  s = s.replace(/^[\s\S]*?return\s*\(/m, "");
  s = s.replace(/\)\s*;?\s*\}\s*(export)?[\s\S]*$/m, "");
  s = s.replace(/import[\s\S]*?;/g, "");
  s = s.replace(/<ClassContainer>/g, "<div class=\"lesson\">");
  s = s.replace(/<\/ClassContainer>/g, "</div>");
  s = s.replace(/<ClassBox>/g, "<div>");
  s = s.replace(/<\/ClassBox>/g, "</div>");
  s = s.replace(/<ClassImage[^/]*\/>/g, "");
  s = s.replace(/<ClassImage[^>]*>[\s\S]*?<\/ClassImage>/g, "");
  s = s.replace(/<ClassLink[^>]*>/g, "<a>");
  s = s.replace(/<\/ClassLink>/g, "</a>");
  s = s.replace(/<ClassToolTip[\s\S]*?>/g, "<span>");
  s = s.replace(/<\/ClassToolTip>/g, "</span>");
  s = s.replace(/\{`([\s\S]*?)`\}/g, "$1");
  s = s.replace(/\{"([^"]*)"\}/g, "$1");
  s = s.replace(/\{'([^']*)'\}/g, "$1");
  s = s.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, "");
  s = s.replace(/\{[^}]+\}/g, "");
  s = s.replace(/\s+/g, " ").trim();
  return s || "<p>Conteúdo em migração.</p>";
}

function parseClassLink(link) {
  // /classes/unity-0/1 -> { section: unity-0, content: 1, id: unity-0-1 }
  const m = link.match(/\/classes\/([^/]+)\/([^/]+)/);
  if (!m) return null;
  return { section: m[1], content: m[2], id: `${m[1]}-${m[2]}` };
}

ensureDir(outPublic);
ensureDir(path.join(outPublic, "exercises"));
ensureDir(path.join(outPublic, "lessons"));
ensureDir(outSecrets);

const indexMeta = fs.existsSync(legacyIndex)
  ? JSON.parse(fs.readFileSync(legacyIndex, "utf8"))
  : {};

const exerciseFiles = fs
  .readdirSync(legacyExercises)
  .filter((f) => f.endsWith(".json"));

const catalogExercises = [];
const seenIds = new Set();

for (const file of exerciseFiles) {
  const raw = JSON.parse(
    fs.readFileSync(path.join(legacyExercises, file), "utf8")
  );
  // Filename is source of truth — avoids catalog duplicates when JSON id is wrong
  const fileId = file.replace(/\.json$/, "");
  const id = fileId;
  if (raw.id && raw.id !== fileId) {
    console.warn(
      `Warning: ${file} has id "${raw.id}" but filename is "${fileId}"; using filename`
    );
  }
  if (seenIds.has(id)) {
    console.warn(`Warning: skipping duplicate exercise id "${id}" from ${file}`);
    continue;
  }
  seenIds.add(id);
  const meta = indexMeta[id] || {};
  const cases = Array.isArray(raw.cases) ? raw.cases : [];

  const publicExamples = cases.slice(0, 2).map((c, i) => ({
    id: i + 1,
    input: c.input ?? {},
    // intentionally no expected output
  }));

  const statementHtml =
    raw.problem ||
    meta.statement ||
    `<p>Resolva o exercício <strong>${raw.name || id}</strong>.</p>`;

  const publicDoc = {
    id,
    name: raw.name || meta.name || id,
    category: raw.category || meta.category || "programming",
    labels: raw.labels || meta.labels || [],
    statementHtml,
    examples: publicExamples,
    inputKeys: cases[0]?.input ? Object.keys(cases[0].input) : [],
    previous: raw.previous || "",
    next: raw.next || "",
  };

  fs.writeFileSync(
    path.join(outPublic, "exercises", `${id}.json`),
    JSON.stringify(publicDoc, null, 2)
  );

  fs.writeFileSync(
    path.join(outSecrets, `${id}.json`),
    JSON.stringify(
      {
        id,
        cases: cases.map((c) => ({
          input: c.input ?? {},
          output: c.output ?? [],
        })),
      },
      null,
      2
    )
  );

  catalogExercises.push({
    id,
    name: publicDoc.name,
    category: publicDoc.category,
    labels: publicDoc.labels,
  });
}

catalogExercises.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

fs.writeFileSync(
  path.join(outPublic, "exercises-catalog.json"),
  JSON.stringify({ exercises: catalogExercises }, null, 2)
);

const menu = fs.existsSync(legacyClassesMenu)
  ? JSON.parse(fs.readFileSync(legacyClassesMenu, "utf8"))
  : {};

const classesCatalog = [];
for (const [unitTitle, items] of Object.entries(menu)) {
  const unitItems = [];
  for (const item of items) {
    const parsed = parseClassLink(item.link);
    if (!parsed) continue;
    const lessonFile = path.join(legacyClassesAll, `${parsed.id}.js`);
    let bodyHtml = `<p>${item.title}</p>`;
    if (fs.existsSync(lessonFile)) {
      bodyHtml = stripJsxToHtml(fs.readFileSync(lessonFile, "utf8"));
    }
    const lesson = {
      id: parsed.id,
      section: parsed.section,
      content: parsed.content,
      title: item.title,
      author: item.author || "Hermano Lustosa",
      authorLink: item.authorLink || "",
      unitTitle,
      bodyHtml,
    };
    fs.writeFileSync(
      path.join(outPublic, "lessons", `${parsed.id}.json`),
      JSON.stringify(lesson, null, 2)
    );
    unitItems.push({
      id: parsed.id,
      title: item.title,
      section: parsed.section,
      content: parsed.content,
      link: `/classes/${parsed.section}/${parsed.content}`,
      author: lesson.author,
      authorLink: lesson.authorLink,
    });
  }
  classesCatalog.push({ unitTitle, items: unitItems });
}

fs.writeFileSync(
  path.join(outPublic, "classes-catalog.json"),
  JSON.stringify({ units: classesCatalog }, null, 2)
);

console.log(
  `Built ${catalogExercises.length} exercises and ${classesCatalog.reduce(
    (n, u) => n + u.items.length,
    0
  )} lessons → apps/functions/data/`
);
