"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type LearningItem = {
  label: string;
  status: "done" | "active" | "planned";
  descEn: string;
  descPl: string;
};

const PATH: LearningItem[] = [
  { label: "HTML & CSS",      status: "done",    descEn: "Semantics, Flexbox, Grid, animations",        descPl: "Semantyka, Flexbox, Grid, animacje" },
  { label: "JavaScript",      status: "done",    descEn: "ES6+, async/await, DOM manipulation",          descPl: "ES6+, async/await, manipulacja DOM" },
  { label: "TypeScript",      status: "done",    descEn: "Strict typing, generics, utility types",       descPl: "Strict typing, generics, typy pomocnicze" },
  { label: "React",           status: "done",    descEn: "Hooks, context, custom hooks, patterns",       descPl: "Hooks, context, własne hooki, wzorce" },
  { label: "Next.js",         status: "done",    descEn: "App Router, RSC, API routes, i18n, SEO",      descPl: "App Router, RSC, API routes, i18n, SEO" },
  { label: "Testing",         status: "active",  descEn: "Vitest, RTL, Playwright — in progress",        descPl: "Vitest, RTL, Playwright — w trakcie" },
  { label: "Full-stack",      status: "planned", descEn: "Databases, auth, deployment pipelines",        descPl: "Bazy danych, autoryzacja, pipelines" },
];

const statusStyle = {
  done:    { color: "#00ffb4", border: "rgba(0,255,180,0.2)",  bg: "rgba(0,255,180,0.05)",  symbol: "✓" },
  active:  { color: "#d44dff", border: "rgba(191,0,255,0.3)", bg: "rgba(191,0,255,0.08)", symbol: "▶" },
  planned: { color: "#445566", border: "rgba(68,85,102,0.2)", bg: "transparent",            symbol: "○" },
};

type Props = { locale: "en" | "pl" };

export function LearningPreviewSection({ locale }: Props) {
  const t = useTranslations("learning");
  const done = PATH.filter(i => i.status === "done").length;
  const total = PATH.length;
  const pct = Math.round((done / total) * 100);

  return (
    <section className="relative py-24">
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,255,180,0.15), rgba(0,180,255,0.15), transparent)" }} />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          {/* LEFT — header + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-[11px] tracking-[3px]" style={{ color: "#00b4ff", textTransform: "uppercase" }}>
              // {t("label")}
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl" style={{ color: "#e8eaf0" }}>
              {t("title")}
            </h2>
            <p className="mb-10 text-sm leading-relaxed" style={{ color: "#8899aa" }}>
              {t("description")}
            </p>

            {/* Progress circle */}
            <div className="mb-10 flex items-center gap-6">
              <div className="relative h-20 w-20 shrink-0">
                <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                  <circle cx="40" cy="40" r="34" fill="none" stroke="rgba(0,255,180,0.08)" strokeWidth="4" />
                  <circle
                    cx="40" cy="40" r="34"
                    fill="none"
                    stroke="#00ffb4"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
                    style={{ filter: "drop-shadow(0 0 6px rgba(0,255,180,0.4))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-lg font-bold" style={{ color: "#00ffb4" }}>{pct}%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "#e8eaf0" }}>{t("progress")}</p>
                <p className="text-xs" style={{ color: "#8899aa" }}>{done} / {total} {locale === "pl" ? "etapów" : "stages"}</p>
              </div>
            </div>

            <Link
              href="/learning"
              className="inline-flex items-center gap-2 border px-6 py-2.5 text-[11px] tracking-[2px] transition-all hover:brightness-125 active:scale-95"
              style={{
                color: "#00b4ff",
                borderColor: "rgba(0,180,255,0.35)",
                background: "transparent",
                textTransform: "uppercase",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              {t("cta")} →
            </Link>
          </motion.div>

          {/* RIGHT — timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2"
          >
            {PATH.map((item, i) => {
              const s = statusStyle[item.status];
              return (
                <motion.div
                  key={item.label}
                  className="flex items-start gap-3 border p-4 transition-all duration-200"
                  style={{
                    borderColor: item.status === "active" ? "rgba(191,0,255,0.3)" : "rgba(0,255,180,0.06)",
                    background: item.status === "active" ? "rgba(191,0,255,0.05)" : item.status === "done" ? "rgba(0,255,180,0.02)" : "transparent",
                    opacity: item.status === "planned" ? 0.45 : 1,
                  }}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: item.status === "planned" ? 0.45 : 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                >
                  {/* Status symbol */}
                  <div
                    className="flex h-7 w-7 shrink-0 items-center justify-center border text-xs font-bold"
                    style={{ color: s.color, borderColor: s.border, background: s.bg }}
                  >
                    {s.symbol}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-bold tracking-wide" style={{ color: item.status === "planned" ? "#445566" : "#e8eaf0" }}>
                        {item.label}
                      </p>
                      {item.status === "active" && (
                        <span className="shrink-0 border px-1.5 py-0.5 text-[8px] tracking-[2px]" style={{ color: "#d44dff", borderColor: "rgba(191,0,255,0.3)", textTransform: "uppercase" }}>
                          {locale === "pl" ? "aktywny" : "active"}
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "#8899aa" }}>
                      {locale === "pl" ? item.descPl : item.descEn}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
