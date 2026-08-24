import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero rise">
        <span className="hero-brand">{siteConfig.name}</span>
        <h1 className="hero-title">Programe. Calcule. Evolua.</h1>
        <p>
          Plataforma gratuita de estudo com aulas e exercícios interativos de
          programação e matemática — pensada para quem está começando.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 24 }}>
          <Link href="/classes" className="hero-cta hero-cta-primary">
            Ver aulas
          </Link>
          <Link href="/exercises" className="hero-cta hero-cta-ghost">
            Praticar exercícios
          </Link>
        </div>
      </section>

      <div className="feature-grid rise rise-delay">
        <article className="feature-card">
          <h3>Curso completo</h3>
          <p>
            Material didático inspirado no ENEM para dar os primeiros passos em
            programação e reforçar matemática.
          </p>
        </article>
        <article className="feature-card">
          <h3>Exercícios no navegador</h3>
          <p>
            Escreva JavaScript, execute localmente e envie para correção no
            servidor — sem revelar as respostas esperadas.
          </p>
        </article>
        <article className="feature-card">
          <h3>Open source</h3>
          <p>
            O código é o projeto <strong>{siteConfig.projectName}</strong> (MIT).
            Estude, faça fork e contribua.
          </p>
        </article>
      </div>
    </div>
  );
}
