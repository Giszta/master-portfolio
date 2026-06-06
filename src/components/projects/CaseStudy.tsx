"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { statusColor, statusLabel, categoryColor } from "@/lib/projectHelpers";
import type { Locale, Project } from "@/types";

type Props = { project: Project; locale: Locale };

const SECTION_COLORS_VAR = ["var(--cyan)", "var(--purple)", "var(--blue)", "var(--cyan)"];
const SECTION_COLORS_RAW = ["#00ffb4", "#da6aff", "#00b4ff", "#00ffb4"];

function SectionHeader({ label, index }: { label: string; index: number }) {
  const colorVar = SECTION_COLORS_VAR[index % SECTION_COLORS_VAR.length];
  const colorRaw = SECTION_COLORS_RAW[index % SECTION_COLORS_RAW.length];
  return (
    <div className="mb-6 flex items-center gap-3">
      <span
        className="text-[10px] tracking-[2px]"
        style={{ color: colorVar, textTransform: "uppercase" }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div
        className="h-px flex-1"
        style={{ background: `linear-gradient(90deg, ${colorRaw}44, transparent)` }}
      />
      <h2 className="text-lg font-bold tracking-wide" style={{ color: "var(--text-primary)" }}>
        {label}
      </h2>
    </div>
  );
}

function hoverCyan(e: React.MouseEvent<HTMLElement>) {
  e.currentTarget.style.color = "var(--cyan)";
}
function hoverReset(color: string) {
  return (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.color = color;
  };
}

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.92.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      clipRule="evenodd"
    />
  </svg>
);

export function CaseStudy({ project, locale }: Props) {
  const t = useTranslations("projects");
  const sc = statusColor(project.status);
  const cc = categoryColor(project.category);

  return (
    <div className="mx-auto max-w-5xl px-6 lg:px-12">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/projects"
          className="mb-8 inline-block text-[10px] tracking-[2px] transition-colors"
          style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
          onMouseEnter={hoverCyan}
          onMouseLeave={hoverReset("var(--text-dim)")}
        >
          {t("back")}
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="mb-5 flex flex-wrap gap-2">
          <span
            className="border px-2.5 py-1 text-[9px] tracking-[2px]"
            style={{
              color: sc.color,
              borderColor: sc.border,
              background: sc.bg,
              textTransform: "uppercase",
            }}
          >
            {statusLabel(project.status, locale)}
          </span>
          <span
            className="border px-2.5 py-1 text-[9px] tracking-[2px]"
            style={{
              color: cc.var,
              borderColor: `${cc.raw}44`,
              background: `${cc.raw}0d`,
              textTransform: "uppercase",
            }}
          >
            {project.category}
          </span>
          <span
            className="border px-2.5 py-1 text-[9px] tracking-[2px]"
            style={{
              color: "var(--text-secondary)",
              borderColor: "rgba(136,153,170,0.2)",
              background: "transparent",
              textTransform: "uppercase",
            }}
          >
            {project.difficulty}
          </span>
        </div>

        <h1
          className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl"
          style={{ color: "var(--text-primary)" }}
        >
          {project.title}
        </h1>
        <p
          className="mb-8 max-w-3xl text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {project.longDescription[locale]}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-[2px] transition-all hover:brightness-110"
              style={{
                background: "var(--cyan)",
                color: "var(--bg)",
                textTransform: "uppercase",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              {t("view_live")} →
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border px-5 py-2.5 text-[11px] tracking-[2px] transition-all hover:brightness-125"
            style={{
              color: "var(--cyan)",
              borderColor: "var(--cyan-border)",
              background: "transparent",
              textTransform: "uppercase",
              clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
            }}
          >
            <GitHubIcon />
            {t("view_code")}
          </a>
        </div>
      </motion.div>

      {/* Screenshot */}
      {project.image && (
        <motion.div
          className="mb-16 overflow-hidden"
          style={{ border: "1px solid var(--cyan-dim)", boxShadow: "0 0 40px var(--cyan-glow)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full" style={{ height: "clamp(200px, 40vw, 400px)" }}>
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover object-top"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to bottom, transparent 70%, rgba(5,8,16,0.6) 100%)",
              }}
              aria-hidden="true"
            />
          </div>
        </motion.div>
      )}

      {/* Stack */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border px-3 py-1.5 text-[10px] tracking-[1.5px]"
              style={{
                color: "var(--cyan-muted)",
                borderColor: "var(--cyan-border)",
                background: "var(--cyan-subtle)",
                textTransform: "uppercase",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <div className="space-y-16">
        {/* Features */}
        {project.features.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader label={t("section_features")} index={0} />
            <ul className="space-y-2">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-[10px]" style={{ color: "var(--cyan)" }}>
                    →
                  </span>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {f[locale]}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Technical decisions */}
        {project.techDecisions.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader label={t("section_tech")} index={1} />
            <div className="space-y-4">
              {project.techDecisions.map((td, i) => (
                <div
                  key={i}
                  className="border p-5"
                  style={{ borderColor: "var(--purple-dim)", background: "var(--purple-glow)" }}
                >
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p
                        className="mb-1.5 text-[9px] tracking-[2px]"
                        style={{ color: "var(--purple)", textTransform: "uppercase" }}
                      >
                        {t("problem")}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {td.problem[locale]}
                      </p>
                    </div>
                    <div className="h-px sm:hidden" style={{ background: "var(--purple-dim)" }} />
                    <div>
                      <p
                        className="mb-1.5 text-[9px] tracking-[2px]"
                        style={{ color: "var(--cyan)", textTransform: "uppercase" }}
                      >
                        {t("decision")}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {td.decision[locale]}
                      </p>
                    </div>
                    <div className="h-px sm:hidden" style={{ background: "var(--purple-dim)" }} />
                    <div>
                      <p
                        className="mb-1.5 text-[9px] tracking-[2px]"
                        style={{ color: "var(--blue)", textTransform: "uppercase" }}
                      >
                        {t("result")}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {td.result[locale]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Challenges */}
        {project.challenges.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader label={t("section_challenges")} index={2} />
            <div className="space-y-4">
              {project.challenges.map((ch, i) => (
                <div
                  key={i}
                  className="border p-5"
                  style={{ borderColor: "var(--blue-dim)", background: "var(--blue-glow)" }}
                >
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div>
                      <p
                        className="mb-1.5 text-[9px] tracking-[2px]"
                        style={{ color: "var(--red)", textTransform: "uppercase" }}
                      >
                        {t("challenge")}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {ch.challenge[locale]}
                      </p>
                    </div>
                    <div className="h-px sm:hidden" style={{ background: "var(--blue-dim)" }} />
                    <div>
                      <p
                        className="mb-1.5 text-[9px] tracking-[2px]"
                        style={{ color: "var(--cyan)", textTransform: "uppercase" }}
                      >
                        {t("solution")}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {ch.solution[locale]}
                      </p>
                    </div>
                    <div className="h-px sm:hidden" style={{ background: "var(--blue-dim)" }} />
                    <div>
                      <p
                        className="mb-1.5 text-[9px] tracking-[2px]"
                        style={{ color: "var(--blue)", textTransform: "uppercase" }}
                      >
                        {t("result")}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {ch.result[locale]}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Learnings */}
        {project.learnings.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader label={t("section_learnings")} index={3} />
            <div className="grid gap-3 sm:grid-cols-2">
              {project.learnings.map((l, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 border p-4"
                  style={{ borderColor: "var(--cyan-dim)", background: "var(--cyan-glow)" }}
                >
                  <span className="shrink-0 text-[10px] font-bold" style={{ color: "var(--cyan)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {l[locale]}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Bottom nav */}
      <motion.div
        className="mt-20 border-t pt-8"
        style={{ borderColor: "var(--cyan-glow)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Link
          href="/projects"
          className="inline-block text-[10px] tracking-[2px] transition-colors"
          style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
          onMouseEnter={hoverCyan}
          onMouseLeave={hoverReset("var(--text-dim)")}
        >
          {t("back")}
        </Link>
      </motion.div>
    </div>
  );
}
