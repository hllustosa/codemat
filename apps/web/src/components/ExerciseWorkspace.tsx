"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Button,
  Space,
  Typography,
  Alert,
  App,
  Select,
  Input,
} from "antd";
import { PlayCircleOutlined, CloudUploadOutlined } from "@ant-design/icons";
import type { ExercisePublic } from "@/lib/content";
import { runCodeLocally } from "@/lib/runner";
import { gradeExercise } from "@/lib/api";
import { getExerciseSolutionUrl, siteConfig } from "@/lib/site";
import { useAuth } from "./AuthProvider";
import { LoginModal } from "./LoginModal";
import { CodeEditor } from "./CodeEditor";
import { ExerciseStatement } from "./lesson/ExerciseStatement";

type Props = { exercise: ExercisePublic };

function unitFromLabels(labels: string[]): number | null {
  for (const label of labels || []) {
    const m = label.match(/unidade\s+(\d+)/i);
    if (m) return Number(m[1]);
  }
  return null;
}

export function ExerciseWorkspace({ exercise }: Props) {
  const { message } = App.useApp();
  const { user } = useAuth();
  const [code, setCode] = useState("");
  const [running, setRunning] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [localOut, setLocalOut] = useState<string>("");
  const [grade, setGrade] = useState<null | boolean>(null);
  const [loginOpen, setLoginOpen] = useState(false);

  const exampleOptions = useMemo(
    () =>
      exercise.examples.map((ex) => ({
        value: String(ex.id),
        label: `Exemplo ${ex.id}`,
        input: ex.input,
      })),
    [exercise.examples]
  );

  const unity = useMemo(
    () => unitFromLabels(exercise.labels || []),
    [exercise.labels]
  );
  const solutionUrl = useMemo(
    () =>
      unity !== null ? getExerciseSolutionUrl(exercise.id, unity) : null,
    [exercise.id, unity]
  );

  const [exampleId, setExampleId] = useState(exampleOptions[0]?.value);
  const [manualInput, setManualInput] = useState(
    JSON.stringify(exampleOptions[0]?.input ?? {}, null, 2)
  );

  async function onRun() {
    setRunning(true);
    setGrade(null);
    try {
      let input: Record<string, unknown> = {};
      try {
        input = JSON.parse(manualInput);
      } catch {
        message.error("JSON de entrada inválido");
        return;
      }
      const result = await runCodeLocally(code, input);
      if (result.error) {
        setLocalOut(result.error);
      } else {
        setLocalOut(JSON.stringify(result.outputs, null, 2));
      }
    } finally {
      setRunning(false);
    }
  }

  async function onSubmit() {
    if (!user) {
      setLoginOpen(true);
      return;
    }
    setSubmitting(true);
    setGrade(null);
    try {
      const result = await gradeExercise(exercise.id, code);
      setGrade(result.correct);
      message[result.correct ? "success" : "warning"](
        result.correct
          ? "Parabéns! Solução correta."
          : "Ainda não está correto. Tente de novo."
      );
    } catch (err) {
      message.error(err instanceof Error ? err.message : "Erro ao enviar");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="workspace-split">
      <section className="workspace-panel workspace-statement">
        <p style={{ margin: "0 0 8px", fontSize: 13 }}>
          <Link href="/exercises">← Exercícios</Link>
        </p>
        <h1
          style={{
            margin: "0 0 8px",
            fontSize: "1.35rem",
            color: "var(--cm-primary)",
          }}
        >
          {exercise.name}
        </h1>
        <ExerciseStatement
          exerciseId={exercise.id}
          fallbackHtml={exercise.statementHtml}
        />
        {exercise.labels?.length > 0 && (
          <Typography.Paragraph type="secondary" style={{ marginTop: 16 }}>
            {exercise.labels.join(" · ")}
          </Typography.Paragraph>
        )}
        {solutionUrl ? (
          <p style={{ marginTop: 12, fontSize: 14 }}>
            <a href={solutionUrl} target="_blank" rel="noreferrer">
              Ver gabarito no GitHub
            </a>
            {" · "}
            <a
              href={`${siteConfig.githubRepo}/tree/main/${siteConfig.exerciseSolutionsPath}`}
              target="_blank"
              rel="noreferrer"
            >
              Todos os gabaritos
            </a>
          </p>
        ) : (
          <p style={{ marginTop: 12, fontSize: 14 }}>
            <a
              href={`${siteConfig.githubRepo}/tree/main/${siteConfig.exerciseSolutionsPath}`}
              target="_blank"
              rel="noreferrer"
            >
              Gabaritos no GitHub
            </a>
          </p>
        )}
      </section>

      <section className="workspace-panel workspace-editor">
        <div className="workspace-editor-toolbar">
          <Space wrap style={{ width: "100%" }}>
            <Select
              style={{ minWidth: 140 }}
              value={exampleId}
              options={exampleOptions}
              onChange={(v) => {
                setExampleId(v);
                const found = exampleOptions.find((o) => o.value === v);
                if (found) setManualInput(JSON.stringify(found.input, null, 2));
              }}
              placeholder="Exemplo"
            />
            <Button
              type="default"
              icon={<PlayCircleOutlined />}
              loading={running}
              onClick={onRun}
            >
              Executar local
            </Button>
            <Button
              type="primary"
              icon={<CloudUploadOutlined />}
              loading={submitting}
              onClick={onSubmit}
            >
              Enviar para correção
            </Button>
          </Space>
        </div>
        <CodeEditor value={code} onChange={setCode} height="100%" />
        <div className="workspace-editor-footer">
          <Input.TextArea
            rows={3}
            value={manualInput}
            onChange={(e) => setManualInput(e.target.value)}
            aria-label="Entrada JSON"
            placeholder="Entrada JSON para execução local"
          />
          {localOut && (
            <Alert
              style={{ marginTop: 8 }}
              type="info"
              message="Saída local"
              description={<pre style={{ margin: 0 }}>{localOut}</pre>}
            />
          )}
          {grade !== null && (
            <Alert
              style={{ marginTop: 8 }}
              type={grade ? "success" : "warning"}
              message={grade ? "Correto" : "Incorreto"}
              showIcon
            />
          )}
        </div>
      </section>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </div>
  );
}
