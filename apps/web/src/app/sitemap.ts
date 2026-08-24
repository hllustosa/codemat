import { getClassesCatalog, getExercisesCatalog } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap() {
  const base = siteConfig.url;
  const exercises = getExercisesCatalog().map((ex) => ({
    url: `${base}/exercises/${ex.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const lessons = getClassesCatalog().units.flatMap((unit) =>
    unit.items.map((item) => ({
      url: `${base}${item.link}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${base}/classes`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/exercises`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: `${base}/ide`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.4 },
    ...exercises,
    ...lessons,
  ];
}
