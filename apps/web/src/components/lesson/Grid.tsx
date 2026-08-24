"use client";

import type { CSSProperties, ReactNode } from "react";

type GridProps = {
  container?: boolean;
  item?: boolean;
  xs?: number | boolean;
  sm?: number | boolean;
  md?: number | boolean;
  lg?: number | boolean;
  spacing?: number;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
};

function span(n?: number | boolean): string | undefined {
  if (n === true || n === 12) return "1 / -1";
  if (typeof n === "number" && n > 0) return `span ${n}`;
  return undefined;
}

/** Minimal Material-UI Grid stand-in for legacy lesson JSX. */
export default function Grid({
  container,
  item,
  xs,
  sm,
  md,
  spacing = 0,
  direction = "row",
  justifyContent,
  alignItems,
  style,
  className,
  children,
}: GridProps) {
  if (container) {
    return (
      <div
        className={className}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gap: spacing ? spacing * 8 : undefined,
          alignItems,
          justifyItems: justifyContent === "center" ? "center" : undefined,
          ...style,
        }}
      >
        {children}
      </div>
    );
  }

  const col = span(md) || span(sm) || span(xs) || "span 12";
  return (
    <div
      className={className}
      style={{
        gridColumn: col,
        display: item && direction === "column" ? "flex" : undefined,
        flexDirection: direction === "column" ? "column" : undefined,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
