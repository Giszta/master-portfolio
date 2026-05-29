import { AboutView } from "@/components/about/AboutView";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: `${t("page_title")} — dev.portfolio`,
    description: `${t("hero_role")} — ${t("hero_location")}`,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  return (
    <main className="min-h-screen pt-24 pb-24">
      <AboutView locale={locale as Locale} />
    </main>
  );
}
