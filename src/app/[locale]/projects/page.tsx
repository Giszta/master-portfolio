import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { getTranslations } from "next-intl/server";
import { projects } from "@/data/projectsData";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "projects" });
  return {
    title: `${t("page_title")} — dev.portfolio`,
    description: t("page_description"),
  };
}

export default async function ProjectsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <main className="min-h-screen pt-24 pb-24">
      <ProjectsGrid projects={projects} locale={locale as Locale} />
    </main>
  );
}
