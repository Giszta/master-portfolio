import { ContactView } from "@/components/contact/ContactView";
import { getTranslations } from "next-intl/server";
import type { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: `${t("page_title")} — dev.portfolio`,
    description: t("page_description"),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main className="min-h-screen pb-24 pt-24">
      <ContactView locale={locale as Locale} />
    </main>
  );
}
