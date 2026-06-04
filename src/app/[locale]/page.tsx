import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProjectsSection } from "@/components/home/FeaturedProjectsSection";
import { TechnicalProofSection } from "@/components/home/TechnicalProofSection";
import { LearningPreviewSection } from "@/components/home/LearningPreviewSection";
import { ContactCtaSection } from "@/components/home/ContactCtaSection";
import type { Locale } from "@/types";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <HeroSection locale={locale as Locale} />
      <FeaturedProjectsSection locale={locale as Locale} />
      <TechnicalProofSection locale={locale as Locale} />
      <LearningPreviewSection locale={locale as Locale} />
      <ContactCtaSection />
    </main>
  );
}
