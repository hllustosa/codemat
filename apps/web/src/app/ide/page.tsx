import type { Metadata } from "next";
import { Suspense } from "react";
import { IdeClient } from "@/components/IdeClient";

export const metadata: Metadata = {
  title: "IDE",
  description: "IDE JavaScript no navegador para experimentar código.",
};

export default function IdePage() {
  return (
    <Suspense
      fallback={
        <div className="ide-workspace">
          <p>Carregando IDE…</p>
        </div>
      }
    >
      <IdeClient />
    </Suspense>
  );
}
