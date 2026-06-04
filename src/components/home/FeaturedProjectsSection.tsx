"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects } from "@/data/projectsData";
import type { Locale } from "@/types";
import { statusColor, statusLabel, categoryColor, cardGlow } from "@/lib/projectHelpers";

type Props = { locale: Locale };

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

const ExternalIcon = () => (
  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);

export function FeaturedProjectsSection({ locale }: Props) {
  const t = useTranslations("projects");
  const projects = getFeaturedProjects();

  return (
    <section className="relative py-24">
      <div
        className="absolute top-0 right-0 left-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--cyan-dim), var(--purple-dim), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mb-16 flex items-end justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <p
              className="mb-3 text-[11px] tracking-[3px]"
              style={{ color: "var(--cyan)", textTransform: "uppercase" }}
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
              className="mt-3 max-w-xl text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {t("description")}
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 text-[11px] tracking-[2px] transition-colors md:block"
            style={{ color: "var(--text-secondary)", textTransform: "uppercase" }}
            onMouseEnter={hoverCyan}
            onMouseLeave={hoverReset("var(--text-secondary)")}
          >
            {t("all")} →
          </Link>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          {projects.map((project, i) => {
            const sc = statusColor(project.status);
            const cc = categoryColor(project.category);
            const glow = cardGlow(i);

            return (
              <motion.article
                key={project.slug}
                className="group relative flex flex-col transition-all duration-300"
                style={{
                  border: `1px solid ${glow.border}`,
                  background: "rgba(10,15,26,0.85)",
                  boxShadow: `0 0 24px ${glow.glow}, inset 0 0 24px rgba(0,0,0,0.3)`,
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 40px ${glow.glowHover}, inset 0 0 24px rgba(0,0,0,0.3)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 24px ${glow.glow}, inset 0 0 24px rgba(0,0,0,0.3)`;
                }}
              >
                {/* Corner TL */}
                <div
                  className="absolute top-0 left-0 z-10 h-4 w-4"
                  style={{
                    borderTop: `2px solid ${glow.corner}`,
                    borderLeft: `2px solid ${glow.corner}`,
                    opacity: 0.7,
                  }}
                />
                {/* Corner BR */}
                <div
                  className="absolute right-0 bottom-0 z-10 h-4 w-4"
                  style={{
                    borderBottom: `2px solid ${glow.corner}`,
                    borderRight: `2px solid ${glow.corner}`,
                    opacity: 0.7,
                  }}
                />

                {/* Screenshot */}
                {project.image && (
                  <div className="relative w-full overflow-hidden" style={{ height: "160px" }}>
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "brightness(0.75) saturate(0.85)" }}
                    />
                    {/* Gradient fade do tła karty */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, rgba(10,15,26,0.1) 0%, rgba(10,15,26,0.0) 40%, rgba(10,15,26,0.95) 100%)",
                      }}
                      aria-hidden="true"
                    />
                    {/* Color tint per karta */}
                    <div
                      className="absolute inset-0"
                      style={{ background: `${glow.cornerRaw}0a`, mixBlendMode: "color" }}
                      aria-hidden="true"
                    />
                    {/* Scan line na hover */}
                    <motion.div
                      className="absolute right-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{
                        height: "2px",
                        background: `linear-gradient(90deg, transparent, ${glow.cornerRaw}99, transparent)`,
                        boxShadow: `0 0 8px ${glow.cornerRaw}66`,
                      }}
                      animate={{ top: ["0%", "100%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Ikony na screenshocie */}
                    <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center border p-1.5 backdrop-blur-sm transition-colors"
                          style={{
                            color: "var(--text-primary)",
                            borderColor: "rgba(255,255,255,0.2)",
                            background: "rgba(5,8,16,0.7)",
                          }}
                          aria-label={`Live: ${project.title}`}
                          onMouseEnter={hoverCyan}
                          onMouseLeave={hoverReset("var(--text-primary)")}
                        >
                          <ExternalIcon />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center border p-1.5 backdrop-blur-sm transition-colors"
                        style={{
                          color: "var(--text-primary)",
                          borderColor: "rgba(255,255,255,0.2)",
                          background: "rgba(5,8,16,0.7)",
                        }}
                        aria-label={`GitHub: ${project.title}`}
                        onMouseEnter={hoverCyan}
                        onMouseLeave={hoverReset("var(--text-primary)")}
                      >
                        <GitHubIcon />
                      </a>
                    </div>
                  </div>
                )}

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-4 flex gap-2">
                    <span
                      className="border px-2 py-0.5 text-[9px] tracking-[2px]"
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
                      className="border px-2 py-0.5 text-[9px] tracking-[2px]"
                      style={{
                        color: cc.var,
                        borderColor: `${cc.raw}44`,
                        background: `${cc.raw}0d`,
                        textTransform: "uppercase",
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    className="mb-2 text-base font-bold tracking-wide"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>

                  <p
                    className="mb-5 flex-1 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {project.shortDescription[locale]}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border px-2 py-0.5 text-[9px] tracking-[1.5px]"
                        style={{
                          color: "var(--cyan-muted)",
                          borderColor: "var(--cyan-dim)",
                          background: "var(--cyan-subtle)",
                          textTransform: "uppercase",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t pt-4" style={{ borderColor: `${glow.cornerRaw}18` }}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-[10px] tracking-[2px] transition-colors"
                      style={{ color: "var(--text-dim)", textTransform: "uppercase" }}
                      onMouseEnter={hoverCyan}
                      onMouseLeave={hoverReset("var(--text-dim)")}
                    >
                      {t("case_study")} →
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
