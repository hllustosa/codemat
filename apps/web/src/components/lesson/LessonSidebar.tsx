"use client";

import Link from "next/link";
import { Collapse } from "antd";
import type { ClassesCatalog } from "@/lib/content";

type Props = {
  catalog: ClassesCatalog;
  activeSection: string;
  activeContent: string;
};

export function LessonSidebar({
  catalog,
  activeSection,
  activeContent,
}: Props) {
  const activeUnit =
    catalog.units.find((u) =>
      u.items.some(
        (i) => i.section === activeSection && i.content === activeContent
      )
    )?.unitTitle || catalog.units[0]?.unitTitle;

  return (
    <aside className="lesson-sidebar">
      <h2>Conteúdo</h2>
      <Collapse
        size="small"
        defaultActiveKey={activeUnit ? [activeUnit] : []}
        items={catalog.units.map((unit) => ({
          key: unit.unitTitle,
          label: unit.unitTitle,
          children: (
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {unit.items.map((item) => {
                const active =
                  item.section === activeSection &&
                  item.content === activeContent;
                return (
                  <li key={item.id} style={{ marginBottom: 4 }}>
                    <Link
                      href={item.link}
                      style={{
                        display: "block",
                        padding: "6px 8px",
                        borderRadius: 6,
                        fontSize: 13,
                        lineHeight: 1.35,
                        textDecoration: "none",
                        background: active
                          ? "var(--cm-highlight)"
                          : "transparent",
                        color: "var(--cm-primary)",
                        fontWeight: active ? 600 : 400,
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          ),
        }))}
      />
      <p style={{ margin: "12px 8px 4px", fontSize: 12 }}>
        <Link href="/classes" style={{ color: "var(--cm-primary-light)" }}>
          ← Todas as aulas
        </Link>
      </p>
    </aside>
  );
}
