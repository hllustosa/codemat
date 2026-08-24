import type { Metadata } from "next";
import { getExercise, getExercisesCatalog } from "@/lib/content";
import { ExerciseWorkspace } from "@/components/ExerciseWorkspace";

type Props = { params: Promise<{ exerciseId: string }> };

export async function generateStaticParams() {
  return getExercisesCatalog().map((ex) => ({ exerciseId: ex.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { exerciseId } = await params;
  const exercise = getExercise(exerciseId);
  if (!exercise) return { title: "Exercício" };
  return {
    title: exercise.name,
    description: `Pratique: ${exercise.name}`,
  };
}

export default async function ExercisePage({ params }: Props) {
  const { exerciseId } = await params;
  const exercise = getExercise(exerciseId);
  if (!exercise) {
    return (
      <div className="page-wrap">
        <p>Exercício não encontrado.</p>
      </div>
    );
  }

  return <ExerciseWorkspace exercise={exercise} />;
}
