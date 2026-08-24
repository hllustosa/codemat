"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { Button, Tooltip } from "antd";
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { CodeEditor } from "@/components/CodeEditor";
import {
  CONTRAST_COLOR,
  CONSTRAST_LIGHT,
  PRIMARY,
  SECONDARY,
} from "./LessonColors";

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((b) => {
    binary += String.fromCharCode(b);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function ClassContainer({ children }: { children?: ReactNode }) {
  return <article className="lesson-article">{children}</article>;
}

export function ClassSectionTitle({ title }: { title: string }) {
  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 16,
        fontSize: "1.15rem",
        fontWeight: 650,
        color: PRIMARY,
      }}
    >
      <div>{title}</div>
      <hr
        style={{
          height: 1,
          border: "none",
          backgroundColor: PRIMARY,
          marginTop: 2,
        }}
      />
    </div>
  );
}

export function ClassSubSectionTitle({ title }: { title: string }) {
  return (
    <div
      style={{
        marginTop: 18,
        marginBottom: 14,
        padding: "6px 10px",
        marginRight: 16,
        borderRadius: 5,
        fontSize: "1rem",
        backgroundColor: PRIMARY,
        color: SECONDARY,
      }}
    >
      {title}
    </div>
  );
}

export function ClassToolTip({
  content,
  children,
}: {
  content: { title: string; text: string; image?: string; link?: string };
  children?: ReactNode;
}) {
  const { title, text, image, link } = content;
  return (
    <Tooltip
      styles={{ root: { maxWidth: 280 } }}
      title={
        <div>
          <div style={{ fontWeight: 600, marginBottom: 6 }}>{title}</div>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt=""
              style={{ float: "right", marginLeft: 5, width: 100 }}
            />
          ) : null}
          <span style={{ fontSize: 12 }}>{text}</span>
        </div>
      }
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={link || "#"}
        style={{
          backgroundColor: CONSTRAST_LIGHT,
          cursor: "pointer",
          textDecoration: "none",
          color: PRIMARY,
        }}
      >
        {children}
      </a>
    </Tooltip>
  );
}

export function ClassBox({
  content,
  float,
}: {
  content: ReactNode;
  float?: "left" | "right";
}) {
  return (
    <div
      style={{
        position: "relative",
        marginTop: 10,
        marginBottom: 5,
        fontSize: "0.95rem",
        fontWeight: 500,
        color: PRIMARY,
        padding: 12,
        width: 220,
        maxWidth: "100%",
        backgroundColor: CONTRAST_COLOR,
        borderRadius: 5,
        float: float || undefined,
        margin:
          float === "right" ? "16px 0px 10px 12px" : "16px 16px 10px 0px",
      }}
    >
      {content}
      <div
        style={{
          position: "absolute",
          top: -28,
          right: -10,
          fontFamily: "var(--font-dm-sans), sans-serif",
          fontSize: 56,
        }}
      >
        ❞
      </div>
    </div>
  );
}

export function ClassEquation({
  equation,
  block,
}: {
  equation: string;
  block?: boolean;
}) {
  return (
    <div
      style={{
        color: PRIMARY,
        textAlign: "center",
        maxWidth: "95%",
        overflowX: "auto",
        margin: 15,
      }}
    >
      {block ? <BlockMath math={equation} /> : <InlineMath math={equation} />}
    </div>
  );
}

export function Eq({ s, block }: { s: string; block?: boolean }) {
  return block ? <BlockMath math={s} /> : <InlineMath math={s} />;
}

export function ClassImage({
  src,
  pos,
  legend,
  style,
  ...rest
}: {
  src: string;
  pos?: string;
  legend?: string;
  style?: CSSProperties;
  width?: string | number;
  height?: string | number;
  alt?: string;
}) {
  const wrapStyle: CSSProperties =
    pos === "center"
      ? { textAlign: "center", marginTop: 25, marginBottom: 25 }
      : { float: pos as CSSProperties["float"], margin: 10, marginTop: 25, marginBottom: 25 };

  return (
    <div style={wrapStyle}>
      <a href={src} target="_blank" rel="noreferrer">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={legend || ""} style={style} {...rest} />
      </a>
      {legend ? (
        <div style={{ textAlign: "center", fontSize: 12, width: "100%" }}>
          {legend}
        </div>
      ) : null}
    </div>
  );
}

export function ClassLink({
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { children?: ReactNode }) {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      style={{ backgroundColor: CONSTRAST_LIGHT }}
      {...props}
    >
      {children}
    </a>
  );
}

export function ClassCodeEditor({
  code,
  input,
  height = 200,
}: {
  code?: string;
  input?: string;
  height?: number | string;
}) {
  const [showBtn, setShowBtn] = useState(false);

  function handleClick() {
    const c = toBase64Url(code || "");
    const i = toBase64Url(input || "");
    const link = `${window.location.origin}/ide?c=${c}&i=${i}`;
    window.open(link, "_blank");
  }

  return (
    <div
      style={{
        position: "relative",
        width: "80%",
        maxWidth: 600,
        margin: "auto",
      }}
      onMouseEnter={() => setShowBtn(true)}
      onMouseLeave={() => setShowBtn(false)}
    >
      {showBtn ? (
        <Button
          type="primary"
          size="small"
          style={{ position: "absolute", right: 5, top: 5, zIndex: 99 }}
          onClick={handleClick}
        >
          Executar
        </Button>
      ) : null}
      <CodeEditor
        value={code || ""}
        onChange={() => {}}
        height={
          typeof height === "number"
            ? height
            : parseInt(String(height), 10) || 200
        }
        fontSize={13}
        readOnly
      />
    </div>
  );
}
