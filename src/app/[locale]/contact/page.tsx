import { ContactView } from "@/components/contact/ContactView";
import { getTranslations } from "next-intl/server";

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

export default async function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <ContactView />
    </main>
  );
}
