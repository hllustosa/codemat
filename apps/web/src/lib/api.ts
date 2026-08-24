import { getApiBaseUrl } from "./site";
import { getFirebaseAuth } from "./firebase";

async function authHeader(): Promise<Record<string, string>> {
  const auth = getFirebaseAuth();
  const user = auth?.currentUser;
  if (!user) return {};
  const token = await user.getIdToken();
  return { Authorization: `Bearer ${token}` };
}

export async function gradeExercise(
  exerciseId: string,
  code: string
): Promise<{ correct: boolean }> {
  const res = await fetch(`${getApiBaseUrl()}/grade`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(await authHeader()),
    },
    body: JSON.stringify({ exerciseId, code }),
  });
  if (res.status === 401) {
    throw new Error("Faça login para enviar sua solução.");
  }
  if (!res.ok) {
    throw new Error("Não foi possível avaliar o código.");
  }
  return res.json();
}

export async function fetchUserStats(): Promise<{
  trials?: {
    problem_id: string;
    problem_category: string;
    status: string;
    tried_count: number;
  }[];
  submissions?: unknown[];
}> {
  const res = await fetch(`${getApiBaseUrl()}/stats`, {
    headers: await authHeader(),
  });
  if (!res.ok) throw new Error("Falha ao carregar estatísticas.");
  return res.json();
}
