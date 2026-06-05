"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { learningPath, statusMeta } from "@/data/learningData";

export function LearningPreviewSection() {
  const t = useTranslations("learning");

  const done = learningPath.filter((s) => s.status === "done").length;
  const total = learningPath.length;
  const pct = Math.round((done / total) * 100);

  const half = Math.ceil(learningPath.length / 2);
  const col1 = learningPath.slice(0, half);
  const col2 = learningPath.slice(half);

  return (
    <section className="relative py-24">
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--cyan-dim), var(--blue-dim), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — header + progress + CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="mb-3 text-[11px] tracking-[3px]"
              style={{ color: "var(--blue)", textTransform: "uppercase" }}
            >
              {t("label")}
            </p>
            <h2
              className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl"
              style={{ color: "var(--text-primary)" }}
            >
              {t("title")}
            </h2>
            <p className="mb-8 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              {t("description")}
            </p>

            {/* Progress */}
            <div className="mb-8 flex items-center gap-6">
              <div className="relative h-16 w-16 shrink-0 lg:h-20 lg:w-20">
                <svg viewBox="0 0 80 80" className="h-full w-full -rotate-90">
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="var(--cyan-glow)"
                    strokeWidth="4"
                  />
                  <circle
                    cx="40"
                    cy="40"
                    r="34"
                    fill="none"
                    stroke="var(--cyan)"
                    strokeWidth="4"
                    strokeLinecap="square"
                    strokeDasharray={`${2 * Math.PI * 34}`}
                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - pct / 100)}`}
                    style={{ filter: "drop-shadow(0 0 6px rgba(0,255,180,0.4))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-base font-bold lg:text-lg" style={{ color: "var(--cyan)" }}>
                    {pct}%
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
                  {t("progress")}
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {done} / {total} {t("stages")}
                </p>
              </div>
            </div>

            <Link
              href="/learning"
              className="inline-flex items-center gap-2 border px-5 py-2 text-[11px] tracking-[2px] transition-all hover:brightness-125 active:scale-95 lg:px-6 lg:py-2.5"
              style={{
                color: "var(--blue)",
                borderColor: "var(--blue-border)",
                background: "transparent",
                textTransform: "uppercase",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              {t("cta")} →
            </Link>
          </motion.div>

          {/* RIGHT — dwie kolumny, kompaktowe wiersze */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: "clamp(12px, 4vw, 32px)",
            }}
          >
            {[col1, col2].map((col, colIdx) => (
              <div key={colIdx}>
                {col.map((item, i) => {
                  const s = statusMeta[item.status];
                  const isPlanned = item.status === "planned";
                  const isActive = item.status === "active";
                  const globalIdx = colIdx * half + i;

                  return (
                    <motion.div
                      key={item.id}
                      className="flex items-center gap-2 border-b py-2"
                      style={{
                        borderColor: "var(--cyan-glow)",
                        opacity: isPlanned ? 0.4 : 1,
                      }}
                      initial={{ opacity: 0, x: 8 }}
                      whileInView={{ opacity: isPlanned ? 0.4 : 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: globalIdx * 0.035 }}
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{
                          background: s.color,
                          boxShadow: isActive ? `0 0 5px ${s.color}` : "none",
                        }}
                      />
                      <p
                        className="min-w-0 flex-1 truncate text-[10px] leading-tight tracking-[0.5px] lg:text-[11px]"
                        style={{ color: isPlanned ? "var(--text-dim)" : "var(--text-primary)" }}
                      >
                        {item.label}
                      </p>
                      <span className="shrink-0 text-[8px]" style={{ color: s.color }}>
                        {s.symbol}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
