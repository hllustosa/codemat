"use client";

import { useEffect, useState, type ComponentType } from "react";
import { lessonLoaders } from "./lessonLoaders";

type Props = { lessonId: string };

export function LessonView({ lessonId }: Props) {
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setComp(null);
    setError(null);
    const load = lessonLoaders[lessonId];
    if (!load) {
      setError("Conteúdo da aula não encontrado.");
      return;
    }
    load()
      .then((mod) => {
        if (!cancelled) setComp(() => mod.default);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setError("Falha ao carregar a aula.");
      });
    return () => {
      cancelled = true;
    };
  }, [lessonId]);

  if (error) return <p style={{ color: "crimson" }}>{error}</p>;
  if (!Comp) {
    return (
      <p style={{ color: "var(--cm-primary-light)" }}>Carregando aula…</p>
    );
  }
  return <Comp />;
}
