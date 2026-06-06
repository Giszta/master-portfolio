import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projectsData";
import { CaseStudy } from "@/components/projects/CaseStudy";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return routing.locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: `${project.title} — ${t("case_study")} | dev.portfolio`,
    description: project.shortDescription[locale as Locale],
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen pt-24 pb-24">
      <CaseStudy project={project} locale={locale as Locale} />
    </main>
  );
}
