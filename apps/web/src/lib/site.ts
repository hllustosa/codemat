export const siteConfig = {
  name: "Code & Mat",
  projectName: "CodeMat",
  description:
    "Curso de programação e matemática para iniciantes — pratique com exercícios interativos no navegador.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://codematbr.web.app",
  locale: "pt-BR",
};

export function getApiBaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://us-central1-codematbr.cloudfunctions.net/api"
  );
}
