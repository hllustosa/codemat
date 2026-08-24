"use client";

import Link from "next/link";
import { Button } from "antd";
import catalog from "../../../../functions/data/public/exercises-catalog.json";
import { PRIMARY } from "./LessonColors";

type Props = { unity: number | string };

export default function ProblemsList({ unity }: Props) {
  const label = `unidade ${unity}`;
  const exercises = (catalog.exercises || []).filter((ex) =>
    (ex.labels || []).some(
      (l: string) => l.toLowerCase() === label.toLowerCase()
    )
  );

  if (exercises.length === 0) {
    return (
      <p style={{ color: PRIMARY }}>
        Nenhum exercício listado para a {label}.
      </p>
    );
  }

  return (
    <div>
      {exercises.map((exercise) => (
        <div key={exercise.id} style={{ margin: 15 }}>
          <Link
            href={`/exercises/${exercise.id}`}
            style={{
              color: PRIMARY,
              fontWeight: 600,
              textDecoration: "underline",
            }}
          >
            {exercise.name}
          </Link>
          <div style={{ marginTop: 8 }}>
            <Button size="small">
              <Link href={`/exercises/${exercise.id}`}>Abrir exercício</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
