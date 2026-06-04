"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type ProofItem = {
  icon: string;
  titleEn: string;
  titlePl: string;
  descEn: string;
  descPl: string;
  accent: "cyan" | "purple" | "blue";
};

const ITEMS: ProofItem[] = [
  {
    icon: "TS",
    titleEn: "TypeScript-first",
    titlePl: "TypeScript-first",
    descEn: "Strict mode, shared types, Zod validation. No any, no guessing.",
    descPl: "Strict mode, współdzielone typy, Zod. Zero any, zero zgadywania.",
    accent: "cyan",
  },
  {
    icon: "✓",
    titleEn: "Tested flows",
    titlePl: "Testowane przepływy",
    descEn: "Unit tests for logic, component tests for UI, E2E for critical paths.",
    descPl: "Testy jednostkowe, komponentów i E2E dla krytycznych ścieżek.",
    accent: "purple",
  },
  {
    icon: "◈",
    titleEn: "Reusable components",
    titlePl: "Reużywalne komponenty",
    descEn: "CVA variants, composable primitives, clear component contracts.",
    descPl: "Warianty CVA, kompozycja prymitywów, jasne kontrakty komponentów.",
    accent: "blue",
  },
  {
    icon: "⟳",
    titleEn: "API integration",
    titlePl: "Integracja API",
    descEn: "Next.js API routes, Zod schema validation, proper error handling.",
    descPl: "API routes Next.js, walidacja Zod, poprawna obsługa błędów.",
    accent: "cyan",
  },
  {
    icon: "◎",
    titleEn: "Accessible UI",
    titlePl: "Dostępny UI",
    descEn: "Semantic HTML, ARIA labels, keyboard navigation, focus management.",
    descPl: "Semantyczny HTML, ARIA, nawigacja klawiaturą, zarządzanie focusem.",
    accent: "purple",
  },
  {
    icon: "⌥",
    titleEn: "CI-ready",
    titlePl: "Gotowy na CI",
    descEn: "GitHub Actions: lint, type-check, tests, build on every push.",
    descPl: "GitHub Actions: lint, type-check, testy, build przy każdym pushu.",
    accent: "blue",
  },
  {
    icon: "⌘",
    titleEn: "i18n ready",
    titlePl: "Gotowy na i18n",
    descEn: "next-intl with PL/EN routing, localized data, no hardcoded strings.",
    descPl: "next-intl z routingiem PL/EN, zlokalizowane dane, zero hardcoded.",
    accent: "cyan",
  },
  {
    icon: "◐",
    titleEn: "Dark / light mode",
    titlePl: "Dark / light mode",
    descEn: "System preference detection, localStorage persistence, no flash.",
    descPl: "Wykrywanie preferencji, zapis w localStorage, brak flashowania.",
    accent: "purple",
  },
];

const accentColors = {
  cyan: {
    color: "#00ffb4",
    border: "rgba(0,255,180,0.28)",
    glow: "rgba(0,255,180,0.06)",
    glowHover: "rgba(0,255,180,0.14)",
    bg: "rgba(0,255,180,0.06)",
  },
  purple: {
    color: "#d44dff",
    border: "rgba(191,0,255,0.28)",
    glow: "rgba(191,0,255,0.06)",
    glowHover: "rgba(191,0,255,0.14)",
    bg: "rgba(191,0,255,0.06)",
  },
  blue: {
    color: "#00b4ff",
    border: "rgba(0,180,255,0.28)",
    glow: "rgba(0,180,255,0.06)",
    glowHover: "rgba(0,180,255,0.14)",
    bg: "rgba(0,180,255,0.06)",
  },
};

type Props = { locale: "en" | "pl" };

export function TechnicalProofSection({ locale }: Props) {
  const t = useTranslations("proof");

  return (
    <section className="relative py-24">
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(191,0,255,0.15), rgba(0,255,180,0.15), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p
            className="mb-3 text-[11px] tracking-[3px]"
            style={{ color: "#d44dff", textTransform: "uppercase" }}
          >
            {t("label")}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight lg:text-4xl"
            style={{ color: "#e8eaf0" }}
          >
            {t("title")}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed" style={{ color: "#8899aa" }}>
            {t("description")}
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const ac = accentColors[item.accent];
            return (
              <motion.div
                key={item.titleEn}
                className="group relative flex flex-col p-5 transition-all duration-300"
                style={{
                  border: `1px solid ${ac.border}`,
                  background: "rgba(10,15,26,0.85)",
                  boxShadow: `0 0 20px ${ac.glow}, inset 0 0 20px rgba(0,0,0,0.3)`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 36px ${ac.glowHover}, inset 0 0 20px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 20px ${ac.glow}, inset 0 0 20px rgba(0,0,0,0.3)`;
                }}
              >
                {/* Corner TL */}
                <div
                  className="absolute top-0 left-0 h-3.5 w-3.5"
                  style={{
                    borderTop: `2px solid ${ac.color}`,
                    borderLeft: `2px solid ${ac.color}`,
                    opacity: 0.6,
                  }}
                />
                {/* Corner BR */}
                <div
                  className="absolute right-0 bottom-0 h-3.5 w-3.5"
                  style={{
                    borderBottom: `2px solid ${ac.color}`,
                    borderRight: `2px solid ${ac.color}`,
                    opacity: 0.6,
                  }}
                />

                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center border text-sm font-bold"
                  style={{ color: ac.color, borderColor: ac.border, background: ac.bg }}
                >
                  {item.icon}
                </div>

                <h3 className="mb-1.5 text-sm font-bold tracking-wide" style={{ color: "#e8eaf0" }}>
                  {locale === "pl" ? item.titlePl : item.titleEn}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#8899aa" }}>
                  {locale === "pl" ? item.descPl : item.descEn}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
