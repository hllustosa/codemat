"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  exerciseStatementLoaders,
  hasJsStatement,
} from "./exerciseStatementLoaders";

type Props = {
  exerciseId: string;
  fallbackHtml: string;
};

export function ExerciseStatement({ exerciseId, fallbackHtml }: Props) {
  const [Comp, setComp] = useState<ComponentType | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (!hasJsStatement(exerciseId)) {
      setComp(null);
      setFailed(false);
      return;
    }
    let cancelled = false;
    exerciseStatementLoaders[exerciseId]()
      .then((mod) => {
        if (!cancelled) setComp(() => mod.default);
      })
      .catch((err) => {
        console.error(err);
        if (!cancelled) setFailed(true);
      });
    return () => {
      cancelled = true;
    };
  }, [exerciseId]);

  if (Comp) {
    return (
      <div className="lesson-article">
        <Comp />
      </div>
    );
  }

  if (hasJsStatement(exerciseId) && !failed) {
    return (
      <p style={{ color: "var(--cm-primary-light)" }}>Carregando enunciado…</p>
    );
  }

  return (
    <div
      className="statement lesson-article"
      dangerouslySetInnerHTML={{ __html: fallbackHtml }}
    />
  );
}
