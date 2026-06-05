"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type ProofAccent = "cyan" | "purple" | "blue";

const ITEMS: { id: string; icon: string; accent: ProofAccent }[] = [
  { id: "typescript", icon: "TS", accent: "cyan" },
  { id: "testing", icon: "✓", accent: "purple" },
  { id: "components", icon: "◈", accent: "blue" },
  { id: "api", icon: "⟳", accent: "cyan" },
  { id: "a11y", icon: "◎", accent: "purple" },
  { id: "ci", icon: "⌥", accent: "blue" },
  { id: "i18n", icon: "⌘", accent: "cyan" },
  { id: "darkmode", icon: "◐", accent: "purple" },
];

const accentColors: Record<
  ProofAccent,
  {
    color: string;
    border: string;
    glow: string;
    glowHover: string;
    bg: string;
  }
> = {
  cyan: {
    color: "var(--cyan)",
    border: "var(--cyan-border)",
    glow: "var(--cyan-glow)",
    glowHover: "var(--cyan-glow-hover)",
    bg: "var(--cyan-subtle)",
  },
  purple: {
    color: "var(--purple)",
    border: "var(--purple-border)",
    glow: "var(--purple-glow)",
    glowHover: "var(--purple-glow-hover)",
    bg: "var(--purple-subtle)",
  },
  blue: {
    color: "var(--blue)",
    border: "var(--blue-border)",
    glow: "var(--blue-glow)",
    glowHover: "var(--blue-glow-hover)",
    bg: "var(--blue-subtle)",
  },
};

export function TechnicalProofSection() {
  const t = useTranslations("proof");

  return (
    <section className="relative py-24">
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--purple-dim), var(--cyan-dim), transparent)",
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
            style={{ color: "var(--purple)", textTransform: "uppercase" }}
          >
            {t("label")}
          </p>
          <h2
            className="text-3xl font-bold tracking-tight lg:text-4xl"
            style={{ color: "var(--text-primary)" }}
          >
            {t("title")}
          </h2>
          <p
            className="mx-auto mt-3 max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {t("description")}
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => {
            const ac = accentColors[item.accent];
            return (
              <motion.div
                key={item.id}
                className="group relative flex flex-col p-5 transition-all duration-300"
                style={{
                  border: `1px solid ${ac.border}`,
                  background: "var(--bg-card)",
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
                <div
                  className="absolute top-0 left-0 h-3.5 w-3.5"
                  style={{
                    borderTop: `2px solid ${ac.color}`,
                    borderLeft: `2px solid ${ac.color}`,
                    opacity: 0.6,
                  }}
                />
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

                <h3
                  className="mb-1.5 text-sm font-bold tracking-wide"
                  style={{ color: "var(--text-primary)" }}
                >
                  {t(`${item.id}_title`)}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {t(`${item.id}_desc`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
