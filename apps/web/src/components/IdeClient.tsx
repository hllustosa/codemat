"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button, Input, Space, Alert, Typography } from "antd";
import { runCodeLocally } from "@/lib/runner";
import { CodeEditor } from "./CodeEditor";

function fromBase64Url(text: string): string {
  try {
    const padded = text.replace(/-/g, "+").replace(/_/g, "/");
    const pad =
      padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
    const binary = atob(padded + pad);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  } catch {
    return "";
  }
}

export function IdeClient() {
  const searchParams = useSearchParams();
  const [code, setCode] = useState("");
  const [inputJson, setInputJson] = useState("{}");
  const [out, setOut] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const c = searchParams.get("c");
    const i = searchParams.get("i");
    if (c) setCode(fromBase64Url(c));
    if (i) setInputJson(fromBase64Url(i) || "{}");
    setHydrated(true);
  }, [searchParams]);

  async function run() {
    let input: Record<string, unknown> = {};
    try {
      input = JSON.parse(inputJson);
    } catch {
      setOut("JSON de entrada inválido");
      return;
    }
    const result = await runCodeLocally(code, input);
    setOut(result.error || JSON.stringify(result.outputs, null, 2));
  }

  if (!hydrated) {
    return (
      <div className="ide-workspace">
        <Typography.Paragraph>Carregando IDE…</Typography.Paragraph>
      </div>
    );
  }

  return (
    <div className="ide-workspace">
      <div className="ide-workspace-header">
        <div>
          <h1 style={{ margin: 0, fontSize: "1.35rem", color: "var(--cm-primary)" }}>
            IDE
          </h1>
          <Typography.Paragraph type="secondary" style={{ margin: "4px 0 0" }}>
            Use <code>input(&apos;chave&apos;)</code> e <code>output(valor)</code>.
          </Typography.Paragraph>
        </div>
        <Button type="primary" onClick={run}>
          Executar
        </Button>
      </div>
      <CodeEditor value={code} onChange={setCode} height="100%" />
      <div className="ide-workspace-footer">
        <Space orientation="vertical" style={{ width: "100%" }}>
          <Input.TextArea
            rows={3}
            value={inputJson}
            onChange={(e) => setInputJson(e.target.value)}
            placeholder='{"nome":"Maria"}'
          />
          {out && (
            <Alert type="info" message={<pre style={{ margin: 0 }}>{out}</pre>} />
          )}
        </Space>
      </div>
    </div>
  );
}
