"use client";

import Link from "next/link";
import { Collapse, List } from "antd";
import type { ClassesCatalog } from "@/lib/content";

export function ClassesCatalogView({ catalog }: { catalog: ClassesCatalog }) {
  return (
    <Collapse
      items={catalog.units.map((unit) => ({
        key: unit.unitTitle,
        label: unit.unitTitle,
        children: (
          <List
            dataSource={unit.items}
            renderItem={(item) => (
              <List.Item>
                <Link href={item.link}>{item.title}</Link>
              </List.Item>
            )}
          />
        ),
      }))}
    />
  );
}
