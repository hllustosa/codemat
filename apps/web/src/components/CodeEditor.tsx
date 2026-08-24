"use client";

import dynamic from "next/dynamic";
import type { EditorProps } from "@monaco-editor/react";
import type { ComponentType } from "react";

export type CodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  height?: string | number;
  fontSize?: number;
  language?: string;
  readOnly?: boolean;
  className?: string;
};

const MonacoEditor = dynamic(
  () => import("@monaco-editor/react").then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          height: "100%",
          minHeight: 120,
          color: "var(--cm-primary-light)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fafbfc",
        }}
      >
        Carregando editor…
      </div>
    ),
  }
) as ComponentType<EditorProps>;

export function CodeEditor({
  value,
  onChange,
  height = "100%",
  fontSize = 14,
  language = "javascript",
  readOnly = false,
  className,
}: CodeEditorProps) {
  return (
    <div
      className={`code-editor-shell ${className || ""}`}
      style={{ height }}
    >
      <MonacoEditor
        height="100%"
        language={language}
        theme="light"
        value={value}
        onChange={(next) => {
          if (!readOnly) onChange(next ?? "");
        }}
        options={{
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          padding: { top: 12, bottom: 12 },
          fontSize,
          readOnly,
          domReadOnly: readOnly,
          overviewRulerLanes: 0,
          hideCursorInOverviewRuler: true,
          scrollbar: {
            verticalScrollbarSize: 8,
            horizontalScrollbarSize: 8,
          },
        }}
        loading={
          <div
            style={{
              height: "100%",
              color: "var(--cm-primary-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#fafbfc",
            }}
          >
            Carregando editor…
          </div>
        }
      />
    </div>
  );
}
