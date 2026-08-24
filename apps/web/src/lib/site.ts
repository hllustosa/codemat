export const siteConfig = {
  name: "Code & Mat",
  projectName: "CodeMat",
  description:
    "Curso de programação e matemática para iniciantes — pratique com exercícios interativos no navegador.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://codemat--codematbr.us-central1.hosted.app",
  locale: "pt-BR",
  githubRepo: "https://github.com/hllustosa/codemat",
  /** Path inside the repo where reference solutions live (not shipped in the app). */
  exerciseSolutionsPath: "assets/exercise-solutions",
};

export function getApiBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://us-central1-codematbr.cloudfunctions.net/api"
  );
}

/** GitHub blob URL for a reference solution file, if we know the unit. */
export function getExerciseSolutionUrl(
  exerciseId: string,
  unity?: number | string
): string | null {
  if (unity === undefined || unity === null || unity === "") return null;
  const unitFolder = `unidade ${unity}`;
  const encodedFolder = encodeURIComponent(unitFolder);
  return `${siteConfig.githubRepo}/blob/main/${siteConfig.exerciseSolutionsPath}/${encodedFolder}/${exerciseId}.js`;
}

/** Tree URL for all solutions of a unit. */
export function getUnitSolutionsUrl(unity: number | string): string {
  const unitFolder = encodeURIComponent(`unidade ${unity}`);
  return `${siteConfig.githubRepo}/tree/main/${siteConfig.exerciseSolutionsPath}/${unitFolder}`;
}
