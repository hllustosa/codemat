import type { Metadata } from "next";
import { getClassesCatalog } from "@/lib/content";
import { ClassesCatalogView } from "@/components/ClassesCatalogView";

export const metadata: Metadata = {
  title: "Aulas",
  description: "Material didático do Code & Mat — unidades e lições.",
};

export default function ClassesPage() {
  const catalog = getClassesCatalog();

  return (
    <div className="page-wrap">
      <h1>Aulas</h1>
      <p style={{ color: "#5c6b63" }}>
        Conteúdo servido como dados (HTML) a partir do pipeline de conteúdo.
      </p>
      <ClassesCatalogView catalog={catalog} />
    </div>
  );
}
