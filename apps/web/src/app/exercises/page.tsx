import type { Metadata } from "next";
import Link from "next/link";
import { getExercisesCatalog } from "@/lib/content";

export const metadata: Metadata = {
  title: "Exercícios",
  description: "Exercícios interativos por categoria — programação e matemática.",
};

const CATEGORIES = [
  {
    title: "Programação",
    cat: "programming",
    image: "/img/programming.svg",
  },
  {
    title: "Aritmética e Porcentagem",
    cat: "arithmetic",
    image: "/img/arithmetic.svg",
  },
  {
    title: "Análise Combinatória",
    cat: "combinatorics",
    image: "/img/combinatorics.svg",
  },
  {
    title: "Matemática Financeira",
    cat: "financial",
    image: "/img/finances.svg",
  },
  {
    title: "Funções",
    cat: "functions",
    image: "/img/functions.svg",
  },
  {
    title: "Probabilidade",
    cat: "probability",
    image: "/img/probability.svg",
  },
  {
    title: "Progressões",
    cat: "progression",
    image: "/img/progression.svg",
  },
  {
    title: "Trigonometria",
    cat: "trigonometry",
    image: "/img/trigonometry.svg",
  },
] as const;

type Props = {
  searchParams: Promise<{ cat?: string; q?: string }>;
};

export default async function ExercisesPage({ searchParams }: Props) {
  const { cat, q } = await searchParams;
  const exercises = getExercisesCatalog();
  const query = (q || "").trim().toLowerCase();
  const category = (cat || "").trim().toLowerCase();

  if (!category && !query) {
    return (
      <div className="page-wrap">
        <h1>Exercícios</h1>
        <p style={{ color: "var(--cm-primary-light)" }}>
          {exercises.length} problemas organizados por tema. Escolha uma
          categoria:
        </p>
        <div className="category-grid">
          {CATEGORIES.map((c) => (
            <Link
              key={c.cat}
              href={`/exercises?cat=${c.cat}`}
              className="category-card"
            >
              <div className="category-card-icon" data-cat={c.cat}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt="" />
              </div>
              <span>{c.title}</span>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  const filtered = exercises
    .filter((ex) => {
      const matchCat =
        !category || ex.category.toLowerCase().includes(category);
      const matchQ =
        !query ||
        ex.name.toLowerCase().includes(query) ||
        ex.id.toLowerCase().includes(query) ||
        (ex.labels || []).some((l) => l.toLowerCase().includes(query));
      return matchCat && matchQ;
    })
    .sort((a, b) => {
      const unitOf = (labels: string[]) => {
        for (const label of labels || []) {
          const m = label.match(/unidade\s+(\d+)/i);
          if (m) return Number(m[1]);
        }
        return Number.POSITIVE_INFINITY;
      };
      const ua = unitOf(a.labels);
      const ub = unitOf(b.labels);
      if (ua !== ub) return ua - ub;
      return a.name.localeCompare(b.name, "pt-BR");
    });

  const catMeta = CATEGORIES.find((c) => c.cat === category);

  return (
    <div className="page-wrap">
      <p>
        <Link href="/exercises">← Categorias</Link>
      </p>
      <h1>{catMeta?.title || (query ? `Busca: ${q}` : "Exercícios")}</h1>
      <p style={{ color: "var(--cm-primary-light)" }}>
        {filtered.length} problema{filtered.length === 1 ? "" : "s"}
      </p>
      <div className="feature-grid">
        {filtered.map((ex) => (
          <Link
            key={ex.id}
            href={`/exercises/${ex.id}`}
            className="feature-card"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h3 style={{ marginTop: 0 }}>{ex.name}</h3>
            <p style={{ marginBottom: 0, fontSize: 14, color: "var(--cm-primary-light)" }}>
              {ex.category}
              {ex.labels?.length ? ` · ${ex.labels.slice(0, 3).join(", ")}` : ""}
            </p>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <p>Nenhum exercício encontrado neste filtro.</p>
      )}
    </div>
  );
}
