import type { Metadata } from "next";
import { getClassesCatalog, getLessonByRoute } from "@/lib/content";
import { LessonView } from "@/components/lesson/LessonView";
import { LessonSidebar } from "@/components/lesson/LessonSidebar";

type Props = {
  params: Promise<{ section: string; content: string }>;
};

export async function generateStaticParams() {
  const catalog = getClassesCatalog();
  return catalog.units.flatMap((unit) =>
    unit.items.map((item) => ({
      section: item.section,
      content: item.content,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { section, content } = await params;
  const lesson = getLessonByRoute(section, content);
  if (!lesson) return { title: "Aula" };
  return {
    title: lesson.title,
    description: `${lesson.unitTitle}: ${lesson.title}`,
  };
}

export default async function LessonPage({ params }: Props) {
  const { section, content } = await params;
  const catalog = getClassesCatalog();
  const lesson = getLessonByRoute(section, content);
  if (!lesson) {
    return (
      <div className="page-wrap">
        <p>Aula não encontrada.</p>
      </div>
    );
  }

  return (
    <div className="lesson-layout">
      <LessonSidebar
        catalog={catalog}
        activeSection={section}
        activeContent={content}
      />
      <div className="lesson-main">
        <p style={{ color: "var(--cm-primary-light)", margin: 0, fontSize: 14 }}>
          {lesson.unitTitle}
        </p>
        <h1 style={{ color: "var(--cm-primary)" }}>{lesson.title}</h1>
        {lesson.author && (
          <p style={{ color: "var(--cm-primary-light)", fontSize: 14 }}>
            {lesson.authorLink ? (
              <a href={lesson.authorLink} target="_blank" rel="noreferrer">
                {lesson.author}
              </a>
            ) : (
              lesson.author
            )}
          </p>
        )}
        <LessonView lessonId={lesson.id} />
      </div>
    </div>
  );
}
