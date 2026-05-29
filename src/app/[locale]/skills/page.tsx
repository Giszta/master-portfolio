import { SkillsView } from "@/components/skills/SkillsView";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "skills" });
  return {
    title: `${t("page_title")} — dev.portfolio`,
    description: t("page_description"),
  };
}

export default async function SkillsPage({ params }: Props) {
  const { locale } = await params;
  return (
    <main className="min-h-screen pt-24 pb-24">
      <SkillsView locale={locale as Locale} />
    </main>
  );
}
